import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Sidebar.css';

import categories from '../data/Categories';
import tee from '../img/tee.svg';
import expandArrow from '../img/expand-arrow.svg';

function Sidebar() {
	const [isExpanded, setIsExpanded] = React.useState(true);

	function handleClick() {
		setIsExpanded((prev) => !prev);
	}

	const categoryList = categories.map((category, key) => {
		if (!category.children) {
			return (
				<Category
					key={key}
					category={category}
				/>
			);
		} else {
			return (
				<CategoryWithChildren
					handleClick={handleClick}
					key={key}
					category={category}
					isExpanded={isExpanded}
				/>
			);
		}
	});

	return <div className='sidebar'>{categoryList}</div>;
}

function Category({ category }) {
	return (
		<Link
			className='category'
			to={`/shop/${category.name.toLowerCase()}`}
		>
			<img
				src={tee}
				width={'30px'}
			/>
			<h1>{category.name}</h1>
		</Link>
	);
}

function ChildCategory({ childName }) {
	return (
		<Link to={`/shop/${childName.toLowerCase()}`}>
			<div className='child-category'>
				<img
					src={tee}
					width={'25px'}
				/>
				<h5>{childName}</h5>
			</div>
		</Link>
	);
}

function CategoryWithChildren({ category, isExpanded, handleClick }) {
	return (
		<div className='category category-children'>
			<div
				onClick={handleClick}
				className='expand-section'
			>
				<img
					src={expandArrow}
					width={'30px'}
				/>
				<h1>{category.name}</h1>
			</div>
			{isExpanded &&
				category.children.map((childName, key) => (
					<ChildCategory
						key={key}
						childName={childName}
					/>
				))}
		</div>
	);
}

export default Sidebar;
