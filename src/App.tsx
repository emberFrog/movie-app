// import { Provider } from 'react-redux'
// import { store } from './redux/store'

import { Header } from './components/Header/Header'
import { FilterBar } from './components/FilterBar/FilterBar'
import { Searcher } from './components/Searcher/Searcher'
import { TicketList } from './components/TicketList/TicketList'

function App() {
	return (
		// <Provider store={store}>
		<>
			<Header />
			<FilterBar />
			<Searcher />
			{/* <TicketList /> */}
		</>

		// </Provider>
	)
}

export default App
