import React from 'react';

import '../styles/Checkout.css';

function Checkout({ cartItems }) {
	const checkoutItems = cartItems.map((item) => {
		console.log(item);
		return (
			<div className='checkout-item'>
				<img src={item.src} />
				<div>
					<h4>{item.brand}</h4>
					<p>{item.model}</p>
				</div>
				<div className='item-quantity-each'>
					<h4>Quantity</h4>
					<input
						type='number'
						defaultValue={item.count}
					/>
					<h4>Each</h4>
					<p>${item.price}</p>
				</div>
				<div className='item-total'>
					<h4>Total</h4>
					<p>${item.price * item.count}</p>
				</div>
			</div>
		);
	});
	return (
		<div className='checkout-container-section'>
			<div className='checkout-items-section'>{checkoutItems}</div>
			<div className='checkout-total-section'>
				<h3>Grand Total</h3>
				<div className='checkout-total-values-section'>
					<div className='checkout-total-headers'>
						<h6>Shipping:</h6>
						<h6>Tax:</h6>
						<h6>Subtotal:</h6>
						<h6>Grand Total:</h6>
					</div>
					<div className='checkout-total-values'>
						<h6>TBD</h6>
						<h6>$99</h6>
						<h6>$3000</h6>
						<h6>$3099</h6>
					</div>
				</div>
				<button className='checkout-button'>Checkout</button>
			</div>
		</div>
	);
}

export default Checkout;
