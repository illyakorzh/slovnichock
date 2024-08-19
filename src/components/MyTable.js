import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Table } from 'reactstrap';
import styled from 'styled-components';

import { StyledInput } from './Form.js';
import { Row } from './Row.js';

const MyTable = ({
	title,
	data,
	callback,
	btnState1,
	btnState2,
	isDisablet,
	isMix,
	callbackMix,
	callbackDelete,
}) => {
	const { register, watch } = useForm();
	const wordValue = watch('word', '');
	const [newData, setNewData] = useState([]);

	useEffect(() => {
		setNewData(data.filter((obj) => obj.word.includes(wordValue)));
	}, [data, wordValue]);

	return (
		<Wrapper>
			<StyledTable>
				<thead>
					<tr>
						<td colSpan={4}>
							<h1 style={{ paddingBottom: '40px' }}>
								{title} {data.length} units
							</h1>
						</td>
					</tr>
				</thead>
				<tbody>
					{data.length > 20 && (
						<tr>
							<td colSpan={4}>
								<StyledInput
									autoComplete='off'
									type='text'
									id='word'
									placeholder={'word'}
									valid={'true'}
									{...register('word')}
								/>
							</td>
						</tr>
					)}
					{isMix && (
						<tr>
							<td colSpan={4}>
								<Button
									size='small'
									fullWidth={true}
									variant='contained'
									disabled={isDisablet}
									onClick={callbackMix}
								>
									Mix word
								</Button>
							</td>
						</tr>
					)}
					{newData?.length > 0 &&
						newData?.map((el) => (
							<Row
								el={el}
								key={el.wordId}
								callback={callback}
								btnState1={btnState1}
								btnState2={btnState2}
								isDisablet={el[isDisablet]}
								callbackDelete={callbackDelete}
							/>
						))}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	height: calc(100% - 120px);
	overflow-y: scroll;
	scrollbar-width: none;
	box-sizing: content-box;
`;

export const StyledTable = styled(Table)`
	border-collapse: collapse;
	width: fit-content;
	min-width: 300px;
	background: #27293c;

	thead {
		h1 {
			display: flex;
			justify-content: center;
			padding: 10px 0 !important;
			font-style: italic;
		}
	}

	& tbody tr {
		box-shadow: 0 -1px #2e3148;
		//&:hover {
		//    background: #2E3148;
		//}
		&:last-child td {
			border-bottom: 1px solid #27293c;
		}
	}

	& tbody tr td {
		padding: 1rem 5px !important;
		&.px-0 {
			padding: 5px 0 !important;
		}
	}

	& thead tr th,
	& tbody tr td {
		&:first-child {
			padding-left: 10px !important;
		}
		&:last-child {
			padding-right: 10px !important;
		}
	}
`;

export default MyTable;
