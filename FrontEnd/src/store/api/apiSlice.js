import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/',
		// Comprueba si existe un token y lo envia en el header
		/* prepareHeaders: (headers, { getState }) => {
			const token = getState().authToken.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		}, */
	}),
	tagTypes: ['Pets'],
	endpoints: (builder) => ({
		// Registra un usuario
		registerUser: builder.mutation({
			query: (userData) => ({
				url: 'person/v1/accounts/register',
				method: 'POST',
				body: userData,
			}),
		}),
		// Login de un usuario
		loginUser: builder.mutation({
			query: (userData) => ({
				url: 'person/v1/token/',
				method: 'POST',
				body: userData,
			}),
		}),
		// Trae el perfil del usuario
		getUserProfile: builder.query({
			query: () => 'person/v1/profile',
		}),
		// Trae todas las mascotas
		getPets: builder.query({
			query: () => 'pet/api/list/',
			providesTags: ['Pets'],
		}),
		// Trae una mascota por el ID de la mascota
		getPetById: builder.query({
			query: (id) => `pet/api/detail/${id}`,
		}),
		// Crea una mascota
		createPet: builder.mutation({
			query: (petData) => ({
				url: 'pet/api/create/',
				method: 'POST',
				body: petData,
			}),
			invalidatesTags: ['Pets'],
		}),
		// Edita los datos de una mascota con el ID de la mascota
		updatePet: builder.mutation({
			query: (id, petData) => ({
				url: `pet/api/update/${id}/`,
				method: 'PATCH',
				body: petData,
			}),
		}),
		// Trae info de la mascota para update por el ID
		getUpdatePetById: builder.query({
			query: (id) => `pet/api/update/${id}`,
			// keepUnusedDataFor:10,
		}),
		// Elimina una mascota con el ID de la mascota
		eliminatePet: builder.mutation({
			query: (id) => ({
				url: `pet/api/delete/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Pets'],
		}),
	}),
});

export const {
	useCreatePetMutation,
	useEliminatePetMutation,
	useUpdatePetMutation,
	useGetUpdatePetByIdQuery,
	useGetPetByIdQuery,
	useGetPetsQuery,
	useGetUserProfileQuery,
	useLoginUserMutation,
	useRegisterUserMutation,
} = apiSlice;
