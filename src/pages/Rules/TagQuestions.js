import { WrapperTable } from './DegreesOfComparison.js';
import { StyledTable } from '../../components/MyTable.js';
import { tagQuestions } from '../../const.js';

export const TagQuestions = () => {
	const {
		examples,
		negativeStatements,
		negativeTagQuestions,
		positiveStatements,
		positiveTagQuestions,
		subjectPronouns,
	} = tagQuestions;
	return (
		<WrapperTable>
			<StyledTable>
				<thead>
					<tr>
						<td colSpan={6}>
							<h1 style={{ paddingBottom: '40px' }}> Tag Questions</h1>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>subjectPronouns</td>
						<td>Positive Statement</td>
						<td>Tag Question (Positive)</td>
						<td>Negative Statement</td>
						<td>Tag Question (Negative)</td>
						<td>Example</td>
					</tr>

					{examples.map((arr, i) => (
						<tr key={i}>
							<td>{subjectPronouns[i]}</td>
							<td>{positiveStatements[i]}</td>
							<td>{positiveTagQuestions[i]}</td>
							<td>{negativeStatements[i]}</td>
							<td>{negativeTagQuestions[i]}</td>
							<td>{examples[i]}</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
		</WrapperTable>
	);
};
