import React from 'react';

import filled from '../img/star-filled.svg';
import empty from '../img/star-empty.svg';

function ReviewStars(props) {
	let stars = [];
	for (let i = 0; i < Number(props.stars); i++) {
		// Fill the first slots with any full stars
		stars.push(
			<img
				className='star'
				src={filled}
			/>
		);
	}
	while (stars.length < 5) {
		// Fill remaining slots with empty stars
		stars.push(
			<img
				className='star'
				src={empty}
			/>
		);
	}
	return <div className='stars-container'>{stars}</div>;
}

export default ReviewStars;
