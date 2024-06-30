// import { useSelector } from 'react-redux'
import { FilterBlock } from '../components/FilterBlock/component'
import { Searcher } from '../components/Searcher/component'
import { TicketList } from '../components/TicketList/TicketList'

export const Home = () => {
	// const filterId = useSelector(state => state.filter.filterKey)

	return (
		<>
			<FilterBlock title='Фильтр' />
			<div className='app-main'>
				<Searcher />
				<TicketList />
			</div>
		</>
	)
}
