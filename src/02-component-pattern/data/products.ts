import { Product } from '../interfaces/interfaces';
import coffeeImg1 from '../assets/coffee-mug.png';
import coffeeImg2 from '../assets/coffee-mug2.png';

const product1 = {
  id: '123',
  title: 'Coffee Mug - Card',
  img: coffeeImg1,
};
const product2 = {
  id: '234',
  title: 'Coffee Mug - Meme',
  img: coffeeImg2,
};

export const products: Product[] = [product1, product2];
