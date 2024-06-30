import { useState } from 'react'

import { Header } from './components/Header/component.jsx'
import { Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './contexts/user.jsx'

import { Home } from './pages/Home'
import { Movie } from './pages/Movie'

import './App.css'
import { NotFound } from './pages/NotFound.js'

function App() {
	return (
		<UserContextProvider>
			<Header />
			<div className='app-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movie/:id' element={<Movie />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</UserContextProvider>
	)
}

export default App
