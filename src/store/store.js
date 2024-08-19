import { configureStore } from '@reduxjs/toolkit';

import DataSlice from './DataSlice.js';
import { LocalStore } from './LocalStore.js';
import UserSlice from './UserSlice.js';
import VerbsSlice from './VerbsSlice.js';

export const store = configureStore({
	reducer: { user: LocalStore(UserSlice, 'user'), data: DataSlice, verbs: VerbsSlice },
});
