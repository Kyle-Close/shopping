import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';

import Items from './data/Items'

function App() {
    const [customerCart, setCustomerCart] = React.useState([]);

    React.useEffect(() => {
        console.log(customerCart);
    }, [customerCart])


    function addItemToCart(item, count){
        setCustomerCart((prevCustomerCart) => {
            const existingItemIndex = prevCustomerCart.findIndex(i => i.model === item.model);

            // If item already exists in the cart, update the count
            if (existingItemIndex >= 0) {
                const newCart = [...prevCustomerCart];
                newCart[existingItemIndex].count += count;
                return newCart;
            } 

            // Else add the new item to the cart
            return [...prevCustomerCart, { ...item, count }];
        })
    }

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
