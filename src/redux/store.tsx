import { configureStore } from '@reduxjs/toolkit'
// import filterReducer from './slice/filterSlice'
// import moviesReducer from './slice/movieSlice'

export const store = configureStore({
	reducer: {
		// filter: filterReducer,
		// movies: moviesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
