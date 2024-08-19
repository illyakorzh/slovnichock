import { Table } from 'reactstrap';
import styled from 'styled-components';

import {
	irregularFormsComparativeSuperlative,
	longAdjectives,
	shortAdjectives,
} from '../../const.js';

const DegreesOfComparison = () => (
	<WrapperTable>
		<StyledTable>
			<thead>
				<tr>
					<td colSpan={4}>
						<h1 style={{ paddingBottom: '40px' }}>Degrees of comparison</h1>
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Reason</td>
					<td>Adjective</td>
					<td>Comparative</td>
					<td>Superlative</td>
				</tr>

				<tr>
					<td className='border' rowSpan={shortAdjectives.length + 1}>
						{' '}
						Short adjectives (1-2 syllables)
					</td>
				</tr>
				{shortAdjectives.map((arr, i) => (
					<tr key={i}>
						<td>{arr[0]}</td>
						<td>{arr[1]}</td>
						<td>{arr[2]}</td>
					</tr>
				))}

				<tr>
					<td className='border'>Ends in -y</td>
					<td>happy</td>
					<td>happier</td>
					<td>happiest</td>
				</tr>

				<tr>
					<td className='border' rowSpan={longAdjectives.length + 1}>
						Long adjectives (2 syllables or more)
					</td>
				</tr>

				{longAdjectives.map((arr, i) => (
					<tr key={i}>
						<td>{arr[0]}</td>
						<td>{arr[1]}</td>
						<td>{arr[2]}</td>
					</tr>
				))}
				<tr>
					<td
						className='border'
						rowSpan={irregularFormsComparativeSuperlative.length + 1}
					>
						Irregular forms
					</td>
				</tr>
				{irregularFormsComparativeSuperlative.map((arr, i) => (
					<tr key={i}>
						<td>{arr[0]}</td>
						<td>{arr[1]}</td>
						<td>{arr[2]}</td>
					</tr>
				))}
			</tbody>
		</StyledTable>
	</WrapperTable>
);

export const WrapperTable = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	height: calc(100% - 18%);
	overflow-y: scroll;
	scrollbar-width: none;
	overflow-x: hidden;

	box-sizing: content-box;
`;

const StyledTable = styled(Table)`
	border-collapse: collapse;
	width: 100%;
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
		&:last-child td {
			border-bottom: 1px solid #27293c;
		}
	}

	& tbody tr td {
		text-align: center;
		box-shadow: 0 -1px #2e3148;
		padding: 1rem 5px !important;
		border-left: 1px solid #2e3148;
	}

	& tbody tr td.border {
		border-left: none;
	}
`;

export default DegreesOfComparison;
