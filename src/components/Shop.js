import React from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from './Sidebar';
import Catalog from './Catalog';

import '../styles/Shop.css';

function Shop() {
	const { category } = useParams();
	return (
		<div className='shop-content'>
			<Sidebar />
			{category && <Catalog />}
		</div>
	);
}

export default Shop;
