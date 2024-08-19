export const asideListItem = ['words', 'rules'];
export const pagesWord = {
	all: {
		name: 'all',
		path: '/words/all words',
	},
	new: {
		name: 'new',
		path: '/words/new words',
	},
	learn: {
		name: 'learn',
		path: '/words/words to learn',
	},
};
export const pagesRules = {
	'degrees of comparison': {
		name: 'degrees of comparison',
		path: '/rules/degrees of comparison',
	},
	'tag questions': {
		name: 'tag questions',
		path: '/rules/tag questions',
	},
	'non-static or dynamic verbs': {
		name: 'non-static or dynamic verbs',
		path: '/rules/non-static or dynamic verbs',
	},
	'irregular verbs': {
		name: 'irregular verbs',
		path: '/rules/irregular verbs',
	},
	tenses: {
		name: ' tenses',
		path: '/rules/tenses',
	},
};
export const styleAside = {
	backgroundColor: '#1D1E2A',
	'& .MuiDrawer-paper': {
		backgroundColor: '#27293C',
		color: 'white',
	},
};
export const inputPasswordMessage = [
	`At least one lowercase letter.`,
	`At least one uppercase letter.`,
	`At least one digit.`,
	`At least one special character (@$!%*?&).`,
	`At least eight characters.`,
];
export const inputFormMainMessage = [
	`All letters must be Lowercase.`,
	`There should be no indentation from the beginning and at the end.`,
	`Must only be letters.`,
];
export const styledSelect = {
	control: (provided) => ({
		...provided,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		border: '1px solid grey',
	}),
	singleValue: (provided) => ({
		...provided,
		color: 'white',
	}),
	menu: (provided) => ({
		...provided,
		backgroundColor: 'rgb(180, 180, 180)',
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? 'rgb(150, 150, 150)' : 'rgb(180, 180, 180)', // Selected state (darker grey)
		':hover': {
			backgroundColor: 'rgb(200, 200, 200)',
		},
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: 'white',
	}),
};
export const optionsSelect = [
	{ value: 'en-GB', label: 'English' },
	{ value: 'lt-LT', label: 'Lithuanian' },
];
export const nonStaticOrDynamicVerbs = {
	know: 'знати',
	understand: 'розуміти',
	love: 'любити',
	hate: 'ненавидіти',
	believe: 'вірити',
	remember: "пам'ятати",
	forget: 'забувати',
	wish: 'бажати',
	want: 'хотіти',
	prefer: 'переважати',
	seem: 'здаватися',
	have: 'мати',
	own: 'володіти',
	contain: 'содержать',
	'consist of': 'состоять',
	'depend on': 'залежати',
	'belong to': 'належати',
	'be happy': 'радіти',
	'be sad': 'сумувати',
	'be angry': 'гніватися',
	'be worried': 'хвилюватися',
	'be afraid': 'боятися',
	'be surprised': 'дивуватися',
	'be shy': 'соромитися',
	'be proud': 'пишатися',
	'be interestedin': 'цікавитися',
	'be bored': 'нудьгувати',
	see: 'бачити',
	hear: 'чути',
	feel: 'відчувати',
	sense: 'почути',
	smell: 'нюхати',
	taste: 'смакувати',
	jump: 'стрибати',
	run: 'бігти',
	fall: 'падати',
	fly: 'літати',
	swim: 'плавати',
	cough: 'кашляти',
	sneeze: 'чихати',
	laugh: 'сміятися',
	cry: 'плакати',
	shout: 'кричати',
	be: 'бути',
};
export const irregularFormsComparativeSuperlative = [
	['Good', 'Better', 'Best'],
	['Bad', 'Worse', 'Worst'],
	['Much/Many', 'More', 'Most'],
	['Little', 'Less', 'Least'],
	['Far', 'Further', 'Furthest/Farthest'],
	['Old', 'Older/Elder', 'Oldest/Eldest'],
	['High', 'Higher', 'Highest'],
	['Low', 'Lower', 'Lowest'],
];
export const shortAdjectives = [
	['-', 'er', 'The  adjective+est'],
	['fast', 'faster', 'the fastest'],
	['big', 'bigger', 'the biggest'],
	['easy', 'easier', 'the easiest'],
];
export const longAdjectives = [
	['-', ' More/less + adjective', 'The most/least + adjective'],
	['informative', 'more/less informative', 'the most/least informative'],
	['energetic', ' more/less energetic', 'the most/least energetic'],
	['beautiful', 'more/less beautiful', 'the most/least beautiful'],
];
export const tagQuestions = {
	subjectPronouns: [
		'I',
		'You (singular)',
		'He',
		'She',
		'It',
		'We',
		'You (plural)',
		'They',
	],
	positiveStatements: [
		'I speak English.',
		'You like pizza.',
		'He plays football.',
		'She studies hard.',
		'It rains a lot here.',
		'We are going to the movies.',
		'You can speak French.',
		'They are tired.',
	],
	negativeStatements: [
		"I don't speak English.",
		"You don't like pizza.",
		"He doesn't play football.",
		"She doesn't study hard.",
		"It doesn't rain a lot here.",
		'We are not going to the movies.',
		"You can't speak French.",
		'They are not tired.',
	],
	positiveTagQuestions: [
		'Do I?',
		'Do you?',
		'Does he?',
		'Does she?',
		'Does it?',
		'Are we?',
		'Can you?',
		'Are they?',
	],
	negativeTagQuestions: [
		"Don't I?",
		"Don't you?",
		"Doesn't he?",
		"Doesn't she?",
		"Doesn't it?",
		"Aren't we?",
		"Can't you?",
		"Aren't they?",
	],
	examples: [
		"I speak English, **don't I**?",
		"You like pizza, **don't you**?",
		"He plays football, **doesn't he**?",
		"She studies hard, **doesn't she**?",
		"It rains a lot here, **doesn't it**?",
		"We are going to the movies, **aren't we**?",
		"You can speak French, **can't you**?",
		"They are tired, **aren't they**?",
	],
};
