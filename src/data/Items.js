import stealth2plus from '../img/drivers/stealth2plus.jpeg';
import dynapower from '../img/drivers/dynapower.jpeg';
import paradym from '../img/drivers/paradym.jpeg';
import g430 from '../img/drivers/g430.jpeg';

import jpx from '../img/irons/jpx923.png';

const items = [
	{
		name: 'Drivers',
		list: [
			{
				brand: 'TaylorMade',
				model: 'Stealth 2 Plus',
				price: '700',
				rating: '4',
				reviews: '250',
				src: stealth2plus,
			},
			{
				brand: 'Wilson',
				model: 'Dynapower',
				price: '500',
				rating: '3',
				reviews: '470',
				src: dynapower,
			},
			{
				brand: 'Callaway',
				model: 'Paradym',
				price: '700',
				rating: '5',
				reviews: '83',
				src: paradym,
			},
			{
				brand: 'Ping',
				model: 'G430',
				price: '800',
				rating: '4',
				reviews: '291',
				src: g430,
			},
		],
	},
	{
		name: 'Irons',
		list: [
			{
				brand: 'Mizuno',
				model: 'JPX 923',
				price: '1700',
				rating: '5',
				reviews: '439',
				src: jpx,
			},
		],
	},
];

export default items;
