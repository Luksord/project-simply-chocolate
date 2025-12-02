import ChocolateBarMobileX1 from '../assets/images/chocolate-bar-mob@1x.png';
import ChocolateBarMobileX2 from '../assets/images/chocolate-bar-mob@2x.png';
import ChocolateBarDesktopX1 from '../assets/images/chocolate-bar-desk@1x.png';
import ChocolateBarDesktopX2 from '../assets/images/chocolate-bar-desk@2x.png';
import MilkMobileX1 from '../assets/images/milk-mob@1x.png';
import MilkMobileX2 from '../assets/images/milk-mob@2x.png';
import MilkDesktopX1 from '../assets/images/milk-desk@1x.png';
import MilkDesktopX2 from '../assets/images/milk-desk@2x.png';
import HazelnutsMobileX1 from '../assets/images/hazelnuts-mob@1x.png';
import HazelnutsMobileX2 from '../assets/images/hazelnuts-mob@2x.png';
import HazelnutsDesktopX1 from '../assets/images/hazelnuts-desk@1x.png';
import HazelnutsDesktopX2 from '../assets/images/hazelnuts-desk@2x.png';
import RaisinsMobileX1 from '../assets/images/raisins-mob@1x.png';
import RaisinsMobileX2 from '../assets/images/raisins-mob@2x.png';
import RaisinsDesktopX1 from '../assets/images/raisins-desk@1x.png';
import RaisinsDesktopX2 from '../assets/images/raisins-desk@2x.png';

interface AdvantageProps {
  images: {
    mobile: string;
    mobile2x: string;
    desktop: string;
    desktop2x: string;
  };
  alt: string;
  name: string;
  tags: string[];
  description: string;
  benefits: string[];
  background?: string;
  color?: string;
}

export const advantages: AdvantageProps[] = [
  {
    images: {
      mobile: ChocolateBarMobileX1,
      mobile2x: ChocolateBarMobileX2,
      desktop: ChocolateBarDesktopX1,
      desktop2x: ChocolateBarDesktopX2,
    },
    alt: 'milk chocolate bar',
    name: 'Milk Chocolate',
    tags: ['chocolate', 'the benefits'],
    description:
      'Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe.',
    benefits: [
      'Boosts mood & energy',
      'Contains antioxidants',
      'Supports cognitive function',
      'Smooth sweet flavour profile',
    ],
    background: 'var(--highlight)',
    color: 'var(--alt-title)',
  },
  {
    images: {
      mobile: MilkMobileX1,
      mobile2x: MilkMobileX2,
      desktop: MilkDesktopX1,
      desktop2x: MilkDesktopX2,
    },
    alt: 'milk bottle',
    name: 'Milk',
    tags: ['milk', 'the benefits'],
    description:
      'Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system.',
    benefits: [
      'High in calcium & vitamins',
      'Supports bone strength',
      'Rich in protein',
      'Helps muscle recovery',
    ],
  },
  {
    images: {
      mobile: HazelnutsMobileX1,
      mobile2x: HazelnutsMobileX2,
      desktop: HazelnutsDesktopX1,
      desktop2x: HazelnutsDesktopX2,
    },
    alt: 'hazelnuts',
    name: 'Nuts',
    tags: ['nuts', 'the benefits'],
    description:
      'Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own.',
    benefits: [
      'Good for heart health',
      'Support brain functions',
      'Contain minerals & fiber',
      'Provide long-lasting energy',
    ],
    background: 'var(--text)',
    color: 'var(--alt-title)',
  },
  {
    images: {
      mobile: RaisinsMobileX1,
      mobile2x: RaisinsMobileX2,
      desktop: RaisinsDesktopX1,
      desktop2x: RaisinsDesktopX2,
    },
    alt: 'chocolate covered raisins',
    name: 'Semi-sweet chocolate',
    tags: ['sweet chocolate', 'the benefits'],
    description:
      'Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter.',
    benefits: [
      'Rich in antioxidants',
      'Supports circulation',
      'Reduces stress',
      'Improves focus & clarity',
    ],
  },
];
