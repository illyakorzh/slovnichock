import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout.js';
import { NotFound } from '../pages/NotFound.js';
import Login from '../pages/Reg pages/Login.js';
import Register from '../pages/Reg pages/Register.js';
import DegreesOfComparison from '../pages/Rules/DegreesOfComparison.js';
import { IrregularVerbs } from '../pages/Rules/IrregularVerbs/IrregularVerbs.js';
import NonStaticOrDynamicVerbs from '../pages/Rules/NonStaticOrDynamicVerbs.js';
import { Rules } from '../pages/Rules/Rules.js';
import { TagQuestions } from '../pages/Rules/TagQuestions.js';
import Tenses from '../pages/Rules/Tenses.tsx';
import All from '../pages/Words/all/All.js';
import Learn from '../pages/Words/Learn.js';
import New from '../pages/Words/New.js';
import { Words } from '../pages/Words/Words.js';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ path: '/', element: <Login /> },
			{ path: '/register', element: <Register /> },
			{
				path: '/words',
				element: <Words />,
				errorElement: <NotFound />,
				children: [
					{ path: '/words/words to learn', element: <Learn /> },
					{ path: '/words/new words', element: <New /> },
					{ path: '/words/all words', element: <All /> },
				],
			},
			{
				path: '/rules',
				element: <Rules />,
				errorElement: <NotFound />,
				children: [
					{ path: '/rules/degrees of comparison', element: <DegreesOfComparison /> },
					{
						path: '/rules/non-static or dynamic verbs',
						element: <NonStaticOrDynamicVerbs />,
					},
					{ path: '/rules/tenses', element: <Tenses /> },
					{ path: '/rules/tag questions', element: <TagQuestions /> },
					{ path: '/rules/irregular verbs', element: <IrregularVerbs /> },
				],
			},
		],
	},
]);
