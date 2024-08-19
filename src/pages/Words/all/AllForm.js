import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import styled from 'styled-components';

import { sendData, translate } from '../../../actions.js';
import { Error } from '../../../components/Error.js';
import { StyledInput } from '../../../components/Form.js';
import { InfoPopUp } from '../../../components/InfoPopUp.js';
import { Pronounce } from '../../../components/Pronounce.js';
import { TranslatedWordWrapper } from '../../../components/TranslatedWordWrapper.js';
import { optionsSelect, styledSelect } from '../../../const.js';
import { getData } from '../../../store/DataSlice.js';

const AllForm = ({ setInputData }) => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);
	const [outputLang, setOutputLang] = useState('en-GB');
	const [TranslatedWords, setTranslatedWords] = useState({});
	const [isPopUpFalse, setIsPopUpFalse] = useState(false);
	const [isPopUpSuccess, setIsPopUpSuccess] = useState(false);

	const storageData = useSelector((state) => state?.data) || [];
	const localUserId = useSelector((state) => state?.user?.token?.user_id);

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const wordValue = watch('word', '');
	const toFotmatWord = (word) => word.toLowerCase().trim();
	const isDuplicate = (word) => storageData?.some((obj) => obj.word === word);

	useEffect(() => {
		setInputData(wordValue);
	}, [wordValue]);

	async function requestTranslate() {
		const fotmatWord = toFotmatWord(wordValue);
		let duplicate = isDuplicate(fotmatWord);
		if (duplicate && wordValue) {
			const filterData = storageData.filter((el) => el.word === fotmatWord);
			setTranslatedWords({ [filterData.world]: filterData[0].translatedWords });
		}

		if (!duplicate && wordValue) {
			setIsLoading(true);
			const translateData = await translate(fotmatWord, outputLang.value);
			setTranslatedWords(translateData);
			setIsLoading(false);
		}
	}

	const onSubmit = async (data) => {
		setIsLoading(true);
		const fotmatWord = toFotmatWord(data.word);

		let duplicate = isDuplicate(fotmatWord);
		if (!duplicate) {
			const obj =
				Object.keys(TranslatedWords)[0] === fotmatWord
					? TranslatedWords
					: await translate(wordValue, outputLang.value);
			const arr = obj[Object.keys(obj)[0]];
			await sendData(fotmatWord, arr, localUserId);
			reset();
			setTranslatedWords([]);
			setIsPopUpSuccess(true);
			setTimeout(() => setIsPopUpSuccess(false), 5000);
		} else {
			setIsPopUpFalse(true);
			setTimeout(() => setIsPopUpFalse(false), 5000);
		}
		dispatch(getData(localUserId));
		setIsLoading(false);
	};
	return (
		<>
			<StyledFormMain onSubmit={handleSubmit(onSubmit)}>
				<WrapperInput>
					<StyledInput
						autoComplete='off'
						type='text'
						id='word'
						placeholder={'word'}
						valid={errors.word ? 'false' : 'true'}
						invalid={errors.word ? 'true' : 'false'}
						{...register('word', {
							required: 'Field is required',
						})}
					/>
					<Pronounce word={wordValue} />
				</WrapperInput>
				{errors?.word?.message && <Error e={errors.word.message} />}
				<Select
					value={optionsSelect.find((option) => option.value === outputLang)}
					defaultValue={setOutputLang}
					onChange={setOutputLang}
					options={optionsSelect}
					styles={styledSelect}
				/>
				<StyledButton disabled={isLoading} type='button' onClick={requestTranslate}>
					translate
				</StyledButton>
				<StyledButton disabled={isLoading}>save</StyledButton>
				{TranslatedWords && (
					<TranslatedWordWrapper
						arrWords={TranslatedWords[Object.keys(TranslatedWords)[0]]}
					/>
				)}
			</StyledFormMain>
			{isPopUpFalse && <InfoPopUp text={'such word already exist'} color={'red'} />}
			{isPopUpSuccess && <InfoPopUp text={'word successfully added'} color={'green'} />}
		</>
	);
};

const StyledFormMain = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const WrapperInput = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

const StyledButton = styled.button`
	background-color: ${(props) =>
		props.disabled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.3)'} !important;
	border: none;
	border-radius: 10px;
	padding: 10px;
`;

export default AllForm;
