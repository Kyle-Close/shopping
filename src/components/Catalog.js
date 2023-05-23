import React from 'react';
import { useParams } from 'react-router-dom';

import items from '../data/Items';
import '../styles/Catalog.css';

function Catalog() {
	const params = useParams();
	const category = params['*'];

	const thisItem = items.find((item) => item.name.toLowerCase() === category);

	const renderedItems = thisItem.list.map((item, key) => {
		console.log(item.src);
		return (
			<img
				src={item.src}
				key={key}
				alt={item.name}
			/>
		);
	});

	return (
		<div className='catalog-container'>
			{renderedItems && <div className='item'>{renderedItems}</div>}
		</div>
	);
}

export default Catalog;
