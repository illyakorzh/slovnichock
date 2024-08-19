import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get, getDatabase, ref } from 'firebase/database';

import app from '../firebaseConfig.js';

const db = getDatabase(app);

export const getVerbs = createAsyncThunk(
	'verbs/getVerbs',
	async (path, { rejectWithValue, dispatch }) => {
		try {
			const dbRef = ref(db, '/verb');
			const snapshot = await get(dbRef);
			if (snapshot.exists()) {
				const myData = snapshot.val();
				dispatch(addVerbs(myData));
			} else {
				console.log('error');
			}
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const VerbsSlice = createSlice({
	name: 'verbs',
	initialState: {},
	reducers: {
		addVerbs: (state, action) => action.payload,
	},
});

export const { addVerbs } = VerbsSlice.actions;
export default VerbsSlice.reducer;
