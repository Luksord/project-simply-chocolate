import MilkChocolateX1 from '../assets/images/classic-milk@1x.png';
import MilkChocolateX2 from '../assets/images/classic-milk@2x.png';
import WhiteChocolateX1 from '../assets/images/classic-white@1x.png';
import WhiteChocolateX2 from '../assets/images/classic-white@2x.png';
import HoneyChocolateX1 from '../assets/images/honey@1x.png';
import HoneyChocolateX2 from '../assets/images/honey@2x.png';
import OrangeChocolateX1 from '../assets/images/orange@1x.png';
import OrangeChocolateX2 from '../assets/images/orange@2x.png';
import PineappleChocolateX1 from '../assets/images/pineapple@1x.png';
import PineappleChocolateX2 from '../assets/images/pineapple@2x.png';
import AppleCranberryChocolateX1 from '../assets/images/apple&cranberry@1x.png';
import AppleCranberryChocolateX2 from '../assets/images/apple&cranberry@2x.png';
import RoastedFruitsChocolateX1 from '../assets/images/roasted-fruits@1x.png';
import RoastedFruitsChocolateX2 from '../assets/images/roasted-fruits@2x.png';
import LimeSaltChocolateX1 from '../assets/images/lime&sea-salt@1x.png';
import LimeSaltChocolateX2 from '../assets/images/lime&sea-salt@2x.png';

interface ProductProps {
  images: {
    x1: string;
    x2: string;
  };
  alt: string;
  name: string;
  type: string;
  price: string;
}

export const products: ProductProps[] = [
  {
    images: {
      x1: MilkChocolateX1,
      x2: MilkChocolateX2,
    },
    alt: 'Bar of Milk chocolate',
    name: 'Classic',
    type: 'Milk chocolate',
    price: '45 UAH',
  },
  {
    images: {
      x1: WhiteChocolateX1,
      x2: WhiteChocolateX2,
    },
    alt: 'Bar of White chocolate',
    name: 'Classic',
    type: 'Whie chocolate',
    price: '54 UAH',
  },
  {
    images: {
      x1: HoneyChocolateX1,
      x2: HoneyChocolateX2,
    },
    alt: 'Bar of Honey milk chocolate',
    name: 'Honey',
    type: 'Milk chocolate',
    price: '50 UAH',
  },
  {
    images: {
      x1: OrangeChocolateX1,
      x2: OrangeChocolateX2,
    },
    alt: 'Bar of Orange dark chocolate',
    name: 'Orange',
    type: 'Dark chocolate',
    price: '45 UAH',
  },
  {
    images: {
      x1: PineappleChocolateX1,
      x2: PineappleChocolateX2,
    },
    alt: 'Bar of Pineapple dark chocolate',
    name: 'Pineapple',
    type: 'Dark chocolate',
    price: '54 UAH',
  },
  {
    images: {
      x1: AppleCranberryChocolateX1,
      x2: AppleCranberryChocolateX2,
    },
    alt: 'Bar of Apple and Cranberry milk chocolate',
    name: 'Apple&Cranberry',
    type: 'Milk chocolate',
    price: '50 UAH',
  },
  {
    images: {
      x1: RoastedFruitsChocolateX1,
      x2: RoastedFruitsChocolateX2,
    },
    alt: 'Bar of Roasted Fruits dark chocolate',
    name: 'Roasted Fruits',
    type: 'Dark chocolate',
    price: '65 UAH',
  },
  {
    images: {
      x1: LimeSaltChocolateX1,
      x2: LimeSaltChocolateX2,
    },
    alt: 'Bar of Lime and Sea Salt dark chocolate',
    name: 'Lime&Sea Salt',
    type: 'Dark chocolate',
    price: '65 UAH',
  },
];
