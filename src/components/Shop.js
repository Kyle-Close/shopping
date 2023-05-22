import React from 'react';

import Sidebar from './Sidebar';
import Catalog from './Catalog';

import '../styles/Shop.css';

function Shop() {
	return (
		<div className='shop-content'>
			<Sidebar />
			<Catalog />
		</div>
	);
}

export default Shop;
