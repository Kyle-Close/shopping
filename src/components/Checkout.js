import React from 'react';
import '../styles/Checkout.css';

const CheckoutItem = ({ item }) => {
	return (
		<div className='checkout-item'>
			<img
				src={item.src}
				alt={item.brand}
			/>
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
};

const calculateSubtotal = (cartItems) => {
	return cartItems.reduce((total, item) => total + item.price * item.count, 0);
};

const calculateTax = (subtotal) => {
	return subtotal * 0.13;
};

const CheckoutTotalSection = ({ shippingCost, cartItems }) => {
	const subtotal = calculateSubtotal(cartItems);
	const tax = calculateTax(subtotal);
	const grandTotal = subtotal + tax + shippingCost;

	return (
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
					<p>${shippingCost}</p>
					<p>${tax}</p>
					<p>${subtotal}</p>
					<p>${grandTotal}</p>
				</div>
			</div>
			<button className='checkout-button'>Checkout</button>
		</div>
	);
};

const Checkout = ({ cartItems }) => {
	const shippingCost = 20;
	const checkoutItems = cartItems.map((item, index) => (
		<CheckoutItem
			key={index}
			item={item}
		/>
	));

	return (
		<div className='checkout-container-section'>
			<div className='checkout-items-section'>{checkoutItems}</div>
			<CheckoutTotalSection
				shippingCost={shippingCost}
				cartItems={cartItems}
			/>
		</div>
	);
};

export default Checkout;
