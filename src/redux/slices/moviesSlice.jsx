import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: '',
}

export const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		value: 0,
	},
	reducers: {
		getMovies: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { getMovies } = moviesSlice.actions

export default moviesSlice.reducer
