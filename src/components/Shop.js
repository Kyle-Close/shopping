import React from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from './Sidebar';
import Catalog from './Catalog';

import '../styles/Shop.css';

function Shop(props) {
	const { category } = useParams();
	return (
		<div className='shop-content'>
			<Sidebar />
			{category && <Catalog handleAddToCart={props.handleAddToCart}/>}
		</div>
	);
}

export default Shop;
