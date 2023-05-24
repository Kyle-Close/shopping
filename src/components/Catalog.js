import React from 'react';
import { useParams } from 'react-router-dom';

import items from '../data/Items';
import Card from './Card';

import '../styles/Catalog.css';

function Catalog() {
	const { category } = useParams();

	const thisItem = items.find((item) => item.name.toLowerCase() === category);

	const productCards = thisItem.list.map((item, index) => (
		<Card
			key={index}
			list={item}
		/>
	));

	return <div className='catalog-container'>{productCards}</div>;
}

export default Catalog;
