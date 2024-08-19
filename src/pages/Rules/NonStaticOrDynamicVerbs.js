import { WrapperTable } from './DegreesOfComparison.js';
import { StyledTable } from '../../components/MyTable.js';
import { nonStaticOrDynamicVerbs } from '../../const.js';

const NonStaticOrDynamicVerbs = () => {
	const sortKetwords = Object.keys(nonStaticOrDynamicVerbs).sort((a, b) =>
		a.localeCompare(b)
	);
	return (
		<WrapperTable>
			<StyledTable>
				<thead>
					<tr>
						<td colSpan={4}>
							<h1 style={{ paddingBottom: '40px' }}>Non-static or dynamic verbs</h1>
						</td>
					</tr>
				</thead>
				<tbody>
					{sortKetwords.map((key) => (
						<tr>
							<td>{key}</td>
							<td>{nonStaticOrDynamicVerbs[key]}</td>
						</tr>
					))}
				</tbody>
			</StyledTable>
		</WrapperTable>
	);
};

export default NonStaticOrDynamicVerbs;
