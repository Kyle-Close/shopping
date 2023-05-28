import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import { HashRouter } from 'react-router-dom';

import Items from './data/Items';

function App() {
	const [customerCart, setCustomerCart] = React.useState([]);
	const [totalItems, setTotalItems] = React.useState('0');

	React.useEffect(() => {
		// Get new item total
		let total = 0;
		customerCart.forEach((item) => {
			total += Number(item.count);
		});
		setTotalItems(total);
	}, [customerCart]);

	function addItemToCart(item, count) {
		setCustomerCart((prevCustomerCart) => {
			const existingItemIndex = prevCustomerCart.findIndex(
				(i) => i.model === item.model
			);

			// If item already exists in the cart, update the count
			if (existingItemIndex >= 0) {
				let newCart;
				// If the new count is 0, then remove it from the bag
				if (count === '0') {
					newCart = [
						...prevCustomerCart.slice(0, existingItemIndex),
						...prevCustomerCart.slice(existingItemIndex + 1),
					];
				} else {
					newCart = [...prevCustomerCart];
					newCart[existingItemIndex].count = count;
				}

				return newCart;
			}

			// Else add the new item to the cart
			return [...prevCustomerCart, { ...item, count }];
		});
	}

	return (
		<div className='App'>
			<Header totalItemsInCart={totalItems} />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/shop'
					element={<Shop handleAddToCart={addItemToCart} />} // Display Shop component when there's no specific category
				/>
				<Route
					path='/shop/:category'
					element={<Shop handleAddToCart={addItemToCart} />} // Display Shop component with specific category
				/>
				<Route
					path='/checkout'
					element={
						<Checkout
							handleAddToCart={addItemToCart}
							cartItems={customerCart}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
