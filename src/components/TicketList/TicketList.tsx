// import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { TicketCard } from '../TicketCard/component'

type TicketType = {
	poster: string
	title: string
	genre: string
	release_year: string
	description: string
	rating: string
}

export const TicketList = (): JSX.Element => {
	const [movies, setMovies] = useState<TicketType[]>([])

	useEffect(() => {
		const getMovies = async () => {
			try {
				const response = await fetch('http://localhost:3030/api/v1/search')
				const data = await response.json()
				if (data.search_result) {
					setMovies(data.search_result)
				} else {
					console.log('Invalid data')
				}
			} catch (error) {
				console.error('Error: movies fetch', error)
			}
		}
		getMovies()
	}, [])

	return (
		<section>
			{movies.map(movie => (
				<TicketCard
					key={movie.title}
					poster={movie.poster}
					title={movie.title}
					genre={movie.genre}
					release_year={movie.release_year}
					description={movie.description}
					rating={movie.rating}
				/>
			))}
			{/* <TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard /> */}

			{/* {tickets.map((movieCard: { id: Key | null | undefined }) => (
				<TicketCard key={movieCard.id} />
			))} */}
		</section>
	)
}
