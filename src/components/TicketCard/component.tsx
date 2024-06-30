import './ticket-card.css'

export const TicketCard = () => {
	return (
		<article className='ticket'>
			<img src='' className='ticket-poster' alt='Movie Poster' />
			<div className='ticket-content'>
				<h2>Властелин Колец: Братство Кольца</h2>
				<div className='ticket-content-info'>
					<div className='movie-tags'>
						<p>Жанр</p>
						<p>Год выпуска</p>
						<p>Описание</p>
					</div>
					<div className='movie-info'>
						<p>Фантастика</p>
						<p>2001</p>
						<p>
							Сказания о Средиземье — это хроника Великой войны за Кольцо,
							длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал
							неограниченную власть, но был обязан служить злу.
						</p>
					</div>
				</div>
			</div>
			<div className='movie-rating'>5 STARS</div>
		</article>
	)
}
