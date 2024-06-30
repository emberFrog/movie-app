import './ticket-card.css'

interface TicketCardProps {
	[key: string]: string
}

export const TicketCard = ({
	poster,
	title,
	genre,
	release_year,
	description,
	rating,
}: TicketCardProps) => {
	return (
		<article className='ticket'>
			<img src={poster} className='ticket-poster' alt='Movie Poster' />
			<div className='ticket-content'>
				<h2>{title}</h2>
				<div className='ticket-content-info'>
					<div className='movie-tags'>
						<p>Жанр</p>
						<p>Год выпуска</p>
						<p>Описание</p>
					</div>
					<div className='movie-info'>
						<p>{genre}</p>
						<p>{release_year}</p>
						<p>{description}</p>
					</div>
				</div>
			</div>
			<div className='movie-rating'>Рейтинг: {rating}</div>
		</article>
	)
}
