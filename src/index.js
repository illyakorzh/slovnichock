import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.js';
import './firebaseConfig.js';
import { Global } from './Global.js';
import { store } from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Global />
		<Provider store={store}>
			<App />
		</Provider>
	</>
);
