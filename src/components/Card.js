import React from 'react';

import ReviewStars from './ReviewStars';
import addToBag from '../img/add-to-cart.svg';

import '../styles/Card.css';
import { parsePath } from 'react-router-dom';

import Items from '../data/Items';

function Card(props) {
	const [itemCount, setItemCount] = React.useState('0');

	const { brand, model, price, rating, reviews, src, id } = props.list;
	const { handleAddToCart: AddToCart } = props;

	function onAddToCartClick(e) {
		let parentContainer = e.target.closest('.product-card');
		const id = parentContainer.dataset.id;
		const item = Items.map((item) => item.list) // Flatten the array to access the 'list' arrays
			.flat()
			.find((obj) => obj.id === id);

		AddToCart(item, itemCount);
	}

	function handleInputChange(event) {
		setItemCount(event.target.value);
	}

	return (
		<div
			className='product-card'
			data-id={id}
		>
			<img
				className='product-img'
				src={src}
			/>
			<div className='card-bottom'>
				<div className='card-left'>
					<h6>{brand}</h6>
					<h4>{model}</h4>
					<h5>${price}</h5>
				</div>
				<div className='card-right'>
					<ReviewStars stars={rating} />
					<p>{reviews} Reviews</p>
					<div className='spinner-add'>
						<input
							onChange={handleInputChange}
							className='product-counter'
							type='number'
							min={0}
							defaultValue={0}
						/>
						<img
							className='add-to-bag-img'
							src={addToBag}
							onClick={onAddToCartClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
