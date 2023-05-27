import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';
import companyIcon from '../img/company-icon.svg';
import shopIcon from '../img/shop.svg';
import checkoutIcon from '../img/checkout.svg';

function Header({ totalItemsInCart }) {
	return (
		<div className='sticky-header'>
			<div className='content'>
				<Link to={'/'}>
					<img
						className='icon'
						src={companyIcon}
						width={'70px'}
					/>
				</Link>
				<Link
					className='title'
					to={'/'}
				>
					The Divot Den
				</Link>
				<div className='shop-checkout-icons'>
					<Link to={'/shop/drivers'}>
						<img
							className='icon'
							src={shopIcon}
							width={'50px'}
						/>
					</Link>
					<Link
						className='checkout-container'
						to={'/checkout'}
					>
						<img
							className='icon checkout-icon'
							src={checkoutIcon}
							width={'45px'}
						/>
						<div className='cart-count'>{totalItemsInCart}</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
