import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { IrregularVerbsRow } from './IrregularVerbsRow.js';
import { StyledInput } from '../../../components/Form.js';
import { StyledTable, Wrapper } from '../../../components/MyTable.js';

export const IrregularVerbs = () => {
	const verbs = useSelector((state) => state.verbs);
	const verbsArr = Object.entries(verbs);
	const [data, setData] = useState(verbsArr);

	const handleChange = (event) => {
		const prevState = [...verbsArr].filter((el) =>
			el[1][1][0].startsWith(event.target.value)
		);
		setData([...prevState]);
	};

	return (
		<Wrapper>
			<StyledTable>
				<thead>
					<tr>
						<td colSpan={4}>
							<h1 style={{ paddingBottom: '40px' }}>Irregular Verbs</h1>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={4}>
							<StyledInput
								onChange={handleChange}
								autoComplete='off'
								type='text'
								id='verb'
								placeholder={'verb'}
								valid={'true'}
							/>
						</td>
					</tr>
					<tr>
						<td>first form</td>
						<td>second form</td>
						<td>third form</td>
					</tr>

					{data.map(([key, el]) => (
						<IrregularVerbsRow el={el} key={key} />
					))}
				</tbody>
			</StyledTable>
		</Wrapper>
	);
};
