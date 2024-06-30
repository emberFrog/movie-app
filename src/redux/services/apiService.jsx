import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SearchParams, SearchResponse } from '../../constants/types'

export const apiService = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3030/api/v1',
	}),
	endpoints: builder => ({
		searchMovies: builder.query({
			query: params =>
				`search?title=${params.title}&genre=${params.genre}&release_year=${
					params.release_year
				}&sort_by=${params.sort_by || 'rating'}&order=${
					params.order || 'desc'
				}&page=${params.page || 1}&limit=${params.limit || 5}`,
		}),
	}),
})

export const { useSearchMoviesQuery } = apiService
