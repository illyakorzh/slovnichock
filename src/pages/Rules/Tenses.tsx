import styled from 'styled-components';
type dataType = { header: string; rules?: string[]; description?: string[] };

const data: dataType[] = [
	{
		header: 'PAST CONTINUES',
		rules: [
			'+ ... + was/were + Ving',
			'- ... + was/were not + Ving',
			'? was/were + ... + Ving',
		],
		description: ['- дія яка відбувалась '],
	},
	{
		header: 'PRESENT CONTINUOUS',
		rules: ['+ ... + to be + Ving', '- ... + to be not + Ving', '? ... + to be + Ving'],
		description: [
			'- дія яка відбувається прямо зараз у момент розмови',
			'(ключові слова now, right now, at present, always, constantly, soon, at the moment)',
		],
	},
	{
		header: 'FUTURE CONTINUOUS',
		rules: [
			'+ ... + will be + Ving',
			'- ... + will not be + Ving',
			'? will + ... + be + Ving',
		],
		description: ['- дія яка буде відбуватися'],
	},
	{
		header: 'PAST PERFECT',
		rules: ['+ ... + had + VIII', '- ... + had not + VIII', '? had + ... + VIII'],
		description: [
			'- дія яка відбувалась до якогось часу',
			'- дія яка відбувалася раніше за іншу в минулому:',
			'(ключові слова by, when, after, before, when, earlier, first)',
		],
	},
	{
		header: 'PRESENT PERFECT',
		rules: [
			'+ ... + have/has + VIII',
			'- ... + have/has not + VIII',
			'? have/has + ... + VIII',
		],
		description: [
			'- недавно виконана дія (ключові слова just, already, lately, recently)',
			'- стосовно опиту (ключові слова never, ever, many times)',
		],
	},
	{
		header: 'FUTURE PERFECT',
		rules: [
			'+ ... + will have + VIII',
			'- ... + will not have + VIII',
			'? will have + ... + VIII',
		],
		description: ['- дія яка буде відбуватися до якогось часу'],
	},
	{
		header: 'PAST PERFECT CONTINUOUS',
		rules: [
			'+ ... + had + been + Ving',
			'- ...+ had not + been + Ving',
			'? had + ... + been + Ving',
		],
		description: ['- дія яка відбувалась якийсь час'],
	},
	{
		header: 'PRESENT PERFECT CONTINUOUS',
		rules: [
			'+ ... + have/has + been + Ving',
			'- ...+ have/has not + been + Ving',
			'? have/has + ... + been + Ving',
		],
		description: [
			'- дія яка почалась та ще не закінчилась (ключові слова yet, since, fore, how long)',
		],
	},
	{
		header: 'FUTURE PERFECT CONTINUOUS',
		rules: [
			'+ ... + will + have + been + Ving',
			'- ...+ will not + have + been + Ving',
			'? will + ... + have + been + Ving',
		],
		description: ['- дія яка буде відбуватись якийсь час'],
	},
];

const Tenses = () => {
	return (
		<Wrapper>
			{data.map(({ header, description, rules }) => (
				<SubWrapper key={header}>
					<h2>{header}</h2>
					<div>
						{rules.map((value) => (
							<span key={value}>{value}</span>
						))}
					</div>
					<div>
						{description.map((value) => (
							<span key={value}>{value}</span>
						))}
					</div>
				</SubWrapper>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #27293c;
	display: grid;
	grid-template-columns: repeat(3, minmax(350px, 1fr));

	padding: 10px;
	min-width: 375px;
	margin-bottom: 20px;

	height: calc(100% - 250px);
	overflow-y: scroll;
	scrollbar-width: none;
	overflow-x: hidden;

	box-sizing: content-box;
	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, minmax(350px, 1fr));
	}
	@media (max-width: 750px) {
		grid-template-columns: repeat(1, minmax(350px, 1fr));
	}
`;

const SubWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #2e3148;
	padding: 10px;
	white-space: wrap;
	background: #3b3e5b;
	gap: 20px;
	div {
		display: flex;
		flex-direction: column;
	}
`;

export default Tenses;
