import { StyledTr } from '../../../components/Row.js';

export const IrregularVerbsRow = ({ el }) => {
	return (
		<>
			<StyledTr className='cursor-pointer'>
				<td>
					{el[1].map((word) => (
						<div key={word}>{word}</div>
					))}
				</td>
				<td>
					{el[2].map((word) => (
						<div key={word}>{word}</div>
					))}
				</td>
				<td>
					{el[3].map((word) => (
						<div key={word}>{word}</div>
					))}
				</td>
			</StyledTr>
		</>
	);
};
