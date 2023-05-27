import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

function Home() {
	return (
		<div className='home-content'>
			<div className='to-shop-section'>
				<h4>Premium Golf Equipment</h4>
				<Link to={'/shop/drivers'}>
					<button className='shop-now-button'>Shop Now</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
