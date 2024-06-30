import { TicketCard } from '../TicketCard/component'

export const TicketList = () => {
	return (
		<section>
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />
			<TicketCard />

			{/* {tickets.map((movieCard: { id: Key | null | undefined }) => (
				<TicketCard key={movieCard.id} />
			))} */}
		</section>
	)
}
