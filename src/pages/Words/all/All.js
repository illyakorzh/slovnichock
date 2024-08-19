import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import AllForm from './AllForm.js';
import { StyledTable, Wrapper } from '../../../components/MyTable.js';
import { Row } from '../../../components/Row.js';
import { addToLearn, deleteWord, getData } from '../../../store/DataSlice.js';

const All = () => {
	const dispatch = useDispatch();
	const localUserId = useSelector((state) => state?.user?.token?.user_id);
	const data = useSelector((state) => state?.data) || [];

	const [newData, setNewData] = useState([]);
	const [inputData, setInputData] = useState();

	const callbackDelete = (el) => {
		dispatch(
			deleteWord({
				path: localUserId,
				wordId: el.wordId,
			})
		);
	};
	const submit = (el) => {
		const changedEl = { ...el, isLearned: true, isNew: false };
		dispatch(addToLearn({ changedEl, localUserId }));
	};
	useEffect(() => {
		setNewData(data.filter((obj) => obj.word.includes(inputData)));
	}, [data, inputData]);

	useEffect(() => {
		dispatch(getData(localUserId));
	}, [dispatch, localUserId]);

	return (
		<Wrapper>
			<StyledTable>
				<thead>
					<tr>
						<td colSpan={4}>
							<h1 style={{ paddingBottom: '40px' }}>
								{'All words'} {data.length} units
							</h1>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={4}>
							<AllForm setInputData={setInputData} />
						</td>
					</tr>
					{newData?.length > 0 &&
						newData?.map((el) => (
							<Row
								el={el}
								key={el.wordId}
								callback={submit}
								btnState1={'To Learn'}
								btnState2={'Learn'}
								isDisablet={el['isLearned']}
								callbackDelete={callbackDelete}
							/>
						))}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};

export default All;
