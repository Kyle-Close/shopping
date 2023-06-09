// Drivers
import stealth2plus from '../img/drivers/stealth2plus.jpeg';
import dynapower from '../img/drivers/dynapower.jpeg';
import paradym from '../img/drivers/paradym.jpeg';
import g430 from '../img/drivers/g430.jpeg';

// Irons
import jpx from '../img/irons/jpx923.png';
import zx7 from '../img/irons/zx7-mk2.png';
import tg301 from '../img/irons/tg301.png';
import i230 from '../img/irons/i230.png';
import p970 from '../img/irons/p970.jpg';

// Woods
import paradymWood from '../img/woods/paradym.jpeg';
import aerojet from '../img/woods/aerojet.jpeg';
import stz230 from '../img/woods/stz230.jpeg';
import tsr2 from '../img/woods/tsr1.jpeg';

// Hybrids
import stz230Wood from '../img/hybrids/stz230.jpeg';
import wood0211 from '../img/hybrids/0211.jpeg';
import kingTec from '../img/hybrids/king.jpeg';

// Putters
import hb from '../img/putters/hb-soft-milled.jpeg';
import newPing from '../img/putters/new-ping.jpeg';
import scotty from '../img/putters/scotty.jpeg';
import omoi from '../img/putters/omoi.jpeg';

// Bags
import staDry from '../img/bags/stadry.jpg';
import woode from '../img/bags/woode.jpg';
import maverick from '../img/bags/maverick.jpg';
import camo from '../img/bags/camo.jpg';
import anyday from '../img/bags/anyday.jpg';
import stand from '../img/bags/stand.jpg';

// Balls
import prov1 from '../img/balls/prov1.png'
import noodle from '../img/balls/noodle.png'
import e6 from '../img/balls/bridgestone.jpeg'
import superSoft from '../img/balls/supersoft.jpeg'

// Tech
import speaker from '../img/tech/speaker.jpg'
import watch from '../img/tech/watch.png'
import rangeFinder from '../img/tech/range-finder.jpg'

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
				id: "1"
			},
			{
				brand: 'Wilson',
				model: 'Dynapower',
				price: '500',
				rating: '3',
				reviews: '470',
				src: dynapower,
				id: "2"
			},
			{
				brand: 'Callaway',
				model: 'Paradym',
				price: '700',
				rating: '5',
				reviews: '83',
				src: paradym,
				id: "3"
			},
			{
				brand: 'Ping',
				model: 'G430',
				price: '800',
				rating: '4',
				reviews: '291',
				src: g430,
				id: "4"
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
				id:"5"
			},
			{
				brand: 'Srixon',
				model: 'ZX7',
				price: '1300',
				rating: '3',
				reviews: '240',
				src: zx7,
				id: "6"
			},
			{
				brand: 'Takomo',
				model: 'TG 301 CB',
				price: '800',
				rating: '3',
				reviews: '140',
				src: tg301,
				id: "7"
			},
			{
				brand: 'Ping',
				model: 'I230',
				price: '1599',
				rating: '4',
				reviews: '190',
				src: i230,
				id: "8"
			},
			{
				brand: 'TaylorMade',
				model: 'P970',
				price: '1699',
				rating: '5',
				reviews: '350',
				src: p970,
				id: "9"
			},
		],
	},
	{
		name: 'Woods',
		list: [
			{
				brand: 'Callaway',
				model: 'Paradym',
				price: '450',
				rating: '4',
				reviews: '99',
				src: paradymWood,
				id: "10"
			},
			{
				brand: 'Cobra',
				model: 'Aerojet',
				price: '420',
				rating: '3',
				reviews: '39',
				src: aerojet,
				id: "11"
			},
			{
				brand: 'Mizuno',
				model: 'ST-Z 230',
				price: '350',
				rating: '2',
				reviews: '11',
				src: stz230,
				id: "12"
			},
			{
				brand: 'Titleist',
				model: 'TSR2',
				price: '400',
				rating: '4',
				reviews: '99',
				src: tsr2,
				id: "13"
			},
		],
	},
	{
		name: 'Hybrids',
		list: [
			{
				brand: 'Mizuno',
				model: 'ST-Z 230',
				price: '300',
				rating: '5',
				reviews: '173',
				src: stz230Wood,
				id: "14"
			},
			{
				brand: 'PXG',
				model: '0211',
				price: '180',
				rating: '2',
				reviews: '89',
				src: wood0211,
				id: "15"
			},
			{
				brand: 'Cobra',
				model: 'King Tec',
				price: '350',
				rating: '4',
				reviews: '111',
				src: kingTec,
				id: "16"
			},
		],
	},
	{
		name: 'Putters',
		list: [
			{
				brand: 'Cleveland',
				model: 'HB Soft Milled',
				price: '315',
				rating: '3',
				reviews: '201',
				src: hb,
				id: "17"
			},
			{
				brand: 'Ping',
				model: 'New Ping',
				price: '350',
				rating: '4',
				reviews: '187',
				src: newPing,
				id: "18"
			},
			{
				brand: 'Titleist',
				model: 'Scotty Cameron',
				price: '530',
				rating: '5',
				reviews: '690',
				src: scotty,
				id: "19"
			},
			{
				brand: 'Mizuno',
				model: 'OMOI',
				price: '399',
				rating: '4',
				reviews: '210',
				src: omoi,
				id: "20"
			},
		],
	},
	{
		name: 'Bags',
		list: [
			{
				brand: 'Titelist',
				model: 'Players 4 StaDry',
				price: '365',
				rating: '4',
				reviews: '55',
				src: staDry,
				id: "21"
			},
			{
				brand: 'Ogio',
				model: '2023 Woode',
				price: '310',
				rating: '5',
				reviews: '42',
				src: woode,
				id: "22"
			},
			{
				brand: 'Sun Mountain',
				model: '2021 Maverick',
				price: '330',
				rating: '4',
				reviews: '400',
				src: maverick,
				id: "23"
			},
			{
				brand: 'PXG',
				model: 'Fairway Camo',
				price: '299',
				rating: '3',
				reviews: '230',
				src: camo,
				id: "24"
			},
			{
				brand: 'Ghost',
				model: 'Anyday Maverick',
				price: '450',
				rating: '4',
				reviews: '88',
				src: anyday,
				id: "25"
			},
			{
				brand: 'Stix',
				model: 'Stand Bag',
				price: '280',
				rating: '2',
				reviews: '40',
				src: stand,
				id: "26"
			},
		],
	},
	{
		name: 'Balls',
		list: [
			{
				brand: 'Titelist',
				model: 'Pro v1',
				price: '70',
				rating: '5',
				reviews: '360',
				src: prov1,
				id: "27"
			},
			{
				brand: 'Vice',
				model: 'Pro Plus',
				price: '50',
				rating: '4',
				reviews: '42',
				src: noodle,
				id: "28"
			},
			{
				brand: 'Bridgestone',
				model: 'e6',
				price: '30',
				rating: '3',
				reviews: '87',
				src: e6,
				id: "29"
			},
			{
				brand: 'Callaway',
				model: 'Supersoft',
				price: '35',
				rating: '4',
				reviews: '111',
				src: superSoft,
				id: "30"
			},
		],
	},
	{
		name: 'Golf Tech',
		list: [
			{
				brand: 'Bushnell',
				model: 'Speaker',
				price: '199',
				rating: '4',
				reviews: '30',
				src: speaker,
				id: "31"
			},
			{
				brand: 'Tag Heuer',
				model: 'Watch',
				price: '350',
				rating: '5',
				reviews: '17',
				src: watch,
				id: "32"
			},
			{
				brand: 'Nikon',
				model: 'Range Finder',
				price: '530',
				rating: '5',
				reviews: '65',
				src: rangeFinder,
				id: "33"
			},
		],
	},
];

export default items;
