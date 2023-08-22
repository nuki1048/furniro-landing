import productOne from '../../../public/products/1.jpg';
import productTwo from '../../../public/products/2.jpg';
import productThree from '../../../public/products/3.jpg';
import productFour from '../../../public/products/4.jpg';
import productFive from '../../../public/products/5.jpg';
import productSix from '../../../public/products/6.jpg';
import productSeven from '../../../public/products/7.jpg';
import productEight from '../../../public/products/8.jpg';

// eslint-disable-next-line import/prefer-default-export
export const products = [
  {
    id: 1,
    name: 'Syltherine',
    type: 'Stylish cafe chair',
    image: productOne,
    sale: '-30%',
    price: {
      newPrice: ' 2.500.000',
      oldPrice: ' 3.500.000',
    },
  },
  {
    id: 2,
    name: 'Leviosa',
    type: 'Stylish cafe chair',
    image: productTwo,
    sale: '-30%',
    price: {
      newPrice: '2.500.000',
    },
  },
  {
    id: 3,
    name: 'Lolito',
    type: 'Luxury big sofa',
    image: productThree,
    sale: '-50%',
    price: {
      newPrice: '7.000.000',
      oldPrice: '14.000.000',
    },
  },
  {
    id: 4,
    name: 'Respira',
    type: 'Minimalist fan',
    image: productFour,
    isNew: true,
    price: {
      newPrice: '500.000',
    },
  },
  {
    id: 5,
    name: 'Grifo',
    type: 'Night lamp',
    image: productFive,
    price: {
      newPrice: '1.500.000',
    },
  },
  {
    id: 6,
    name: 'Muggo',
    type: 'Small mug',
    image: productSix,
    isNew: true,
    price: {
      newPrice: '150.000',
    },
  },
  {
    id: 7,
    name: 'Pingky',
    type: 'Cute bed set',
    image: productSeven,
    sale: '-50%',
    price: {
      newPrice: '7.000.000',
      oldPrice: '14.000.000',
    },
  },
  {
    id: 7,
    name: 'Potty',
    type: 'Minimalist flower pot',
    image: productEight,
    isNew: true,
    price: {
      newPrice: '500.000',
    },
  },
];
