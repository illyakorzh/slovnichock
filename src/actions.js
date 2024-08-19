import axios from 'axios';
import { getDatabase, push, ref, set } from 'firebase/database';

import app from './firebaseConfig.js';

async function yandex(word, language) {
	const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
	const queryParams = new URLSearchParams({
		key: process.env.REACT_APP_YANDEX_KEY,
		text: word,
		lang: language + '-uk',
		options: 4,
		flags: 48,
	});
	try {
		const data = await axios.get(`${url}?${queryParams}`);
		return data.data.text;
	} catch (e) {
		console.log(e);
	}
}

async function myMemory(word, language) {
	try {
		const data = await axios.get(
			`https://api.mymemory.translated.net/get?q=${word}&langpair=${language}|uk-UA`
		);
		return data.data.responseData.translatedText;
	} catch (e) {
		console.log(e);
	}
}

export async function translate(text, language = 'en-GB') {
	const trimText = text.trim();
	const fotmatLanguage = language.split('-')[0];

	const dataYandex = await yandex(trimText, fotmatLanguage);
	const dataMyMemory = await myMemory(trimText, language);

	const arrLower = [...dataYandex, dataMyMemory].map((el) => el.toLowerCase());
	const match = (el) => el.match(/<g[^>]*>(.*?)<\/g>/);
	const arrWithoutBrackets = arrLower.map((el) => {
		const isMatch = match(el);
		return isMatch ? isMatch[1] : el;
	});

	function isKirill(word) {
		const middleIndex = Math.floor(word.length / 2);
		const code = word.charCodeAt(middleIndex);
		return code < 65 || code > 122;
	}

	return { [text]: Array.from(new Set(arrWithoutBrackets)).filter(isKirill) };
}

export function sendData(word, translatedWords, path) {
	const db = getDatabase(app);
	const newDocRef = push(ref(db, path + '/words'));
	set(newDocRef, {
		word,
		translatedWords,
		isLearned: false,
		isNew: true,
	}).catch((error) => {
		console.error(error);
	});
}
