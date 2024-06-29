// import { Provider } from 'react-redux'
// import { store } from './redux/store'

import { Header } from './components/Header/Header'
import { FilterBar } from './components/FilterBar/FilterBar'
import { Searcher } from './components/Searcher/Searcher'
import { TicketList } from './components/TicketList/TicketList'

import './App.css'

function App() {
	return (
		// <Provider store={store}>
		<>
			<Header />
			<div className='app-content'>
				<FilterBar />
				<div className='app-main'>
					<Searcher />
					<TicketList />
				</div>
			</div>
		</>

		// </Provider>
	)
}

export default App
