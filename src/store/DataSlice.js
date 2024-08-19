import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get, getDatabase, ref, remove, set } from 'firebase/database';

import app from '../firebaseConfig.js';

const db = getDatabase(app);

export const getData = createAsyncThunk(
	'data/getData',
	async (path, { rejectWithValue, dispatch }) => {
		try {
			const dbRef = ref(db, path + '/words');
			const snapshot = await get(dbRef);
			if (snapshot.exists()) {
				const myData = snapshot.val();
				let data = Object.keys(myData).map((myId) => {
					return {
						...myData[myId],
						wordId: myId,
					};
				});

				dispatch(addData(data));
			} else {
				console.log('error');
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addToLearn = createAsyncThunk(
	'data/addToLearn',
	async ({ changedEl, localUserId }, { rejectWithValue, dispatch }) => {
		try {
			const dbRef = ref(db, localUserId + '/words/' + changedEl.wordId);
			await set(dbRef, changedEl);
			dispatch(updateWord(changedEl));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteWord = createAsyncThunk(
	'data/deleteWord',
	async ({ path, wordId }, { rejectWithValue, dispatch }) => {
		try {
			const dbRef = ref(db, path + '/words/' + wordId);
			await remove(dbRef);
			dispatch(deleteWordSlice(wordId));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const DataSlice = createSlice({
	name: 'data',
	initialState: [],
	reducers: {
		addData: (state, action) =>
			action.payload.sort((a, b) => a.word.localeCompare(b.word)),

		deleteWordSlice: (state, action) =>
			state.filter((obj) => obj.wordId !== action.payload),

		updateWord: (state, action) => {
			return state.map((obj) =>
				obj.wordId === action.payload.wordId ? { ...obj, ...action.payload } : obj
			);
		},
	},
});

export const { addData, updateWord, deleteWordSlice } = DataSlice.actions;
export default DataSlice.reducer;
