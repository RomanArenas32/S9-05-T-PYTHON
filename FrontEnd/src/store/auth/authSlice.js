import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial del usuario
const emptyUser = {
	token: null,
	pets: [],
};

// Utiliza el localStorage para revisar si existe un usuario y mantener la sesión
export const authTokenSlice = createSlice({
	name: 'authToken',
	initialState: localStorage.getItem('user')
		? { token: JSON.parse(localStorage.getItem('user')), pets: [] }
		: emptyUser,
	reducers: {
		setCredentials: (state, { payload }) => {
			const accessToken = payload.access;
			localStorage.setItem('user', JSON.stringify(accessToken));
			state.token = accessToken;
		},
		logOut: (state) => {
			state = emptyUser;
			localStorage.removeItem('user');
			return state;
		},
		setNewPet: (state, { payload }) => {
			state.pets = [...state.pets, payload];
		},
		eliminateNewPet: (state, { payload }) => {
			state.pets = state.pets.filter((pet) => payload !== pet.full_name);
		},
	},
});

// ------------------ //
/* export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'checking',
		user: {},
		errorMessage: undefined,
	},
	reducers: {
		onCheking: (state) => {
			state.status = 'cheking';
			state.user = {};
			state.errorMessage = undefined;
		},
		onLogin: (state, { payload }) => {
			state.status = 'authenticated';
			state.user = payload;
			state.errorMessage = undefined;
		},
		onLogout: (state, { payload }) => {
			state.status = 'not-authenticated';
			state.user = {};
			state.errorMessage = payload;
		},
		clearErrorMessage: (state) => {
			state.errorMessage = undefined;
		},
	},
});
export const { onCheking, onLogin, onLogout, clearErrorMessage } =
	authSlice.actions; */

// Exports Auth with Token
export const { setCredentials, logOut, setNewPet, eliminateNewPet } =
	authTokenSlice.actions;

export const selectCurrentToken = (state) => state.authToken.token;
export const selectPets = (state) => state.authToken.pets;
