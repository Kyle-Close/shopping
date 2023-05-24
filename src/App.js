import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/shop'
					element={<Shop />} // Display Shop component when there's no specific category
				/>
				<Route
					path='/shop/:category'
					element={<Shop />} // Display Shop component with specific category
				/>
				<Route
					path='/checkout'
					element={<Checkout />}
				/>
			</Routes>
		</div>
	);
}

export default App;
