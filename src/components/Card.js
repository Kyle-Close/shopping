import React from 'react';

import ReviewStars from './ReviewStars';
import addToBag from '../img/add-to-cart.svg';

import '../styles/Card.css';

function Card(props) {
	const { brand, model, price, rating, reviews, src } = props.list;
	return (
		<div className='product-card'>
			<img
				className='product-img'
				src={src}
			/>
			<div className='card-bottom'>
				<div className='card-left'>
					<h6>{brand}</h6>
					<h4>{model}</h4>
					<h5>${price} CAD</h5>
				</div>
				<div className='card-right'>
					<ReviewStars stars={rating} />
					<p>{reviews} Reviews</p>
					<div className='spinner-add'>
						<input
							className='product-counter'
							type='number'
							min={0}
						/>
						<img
							className='add-to-bag-img'
							src={addToBag}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
