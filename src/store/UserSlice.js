import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const UserSlice = createSlice({
	name: 'user',
	initialState: { token: null },
	reducers: {
		setUser(state, action) {
			state.token = jwtDecode(action.payload);
		},
		removeUser(state) {
			state.token = null;
		},
	},
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
