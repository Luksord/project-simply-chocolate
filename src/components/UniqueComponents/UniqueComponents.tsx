import css from './UniqueComponents.module.css';
import ChocolateBarMobileX1 from '../../assets/images/chocolate-bar-mob@1x.png';
import ChocolateBarMobileX2 from '../../assets/images/chocolate-bar-mob@2x.png';
import ChocolateBarDesktopX1 from '../../assets/images/chocolate-bar-desk@1x.png';
import ChocolateBarDesktopX2 from '../../assets/images/chocolate-bar-desk@2x.png';
import MilkMobileX1 from '../../assets/images/milk-mob@1x.png';
import MilkMobileX2 from '../../assets/images/milk-mob@2x.png';
import MilkDesktopX1 from '../../assets/images/milk-desk@1x.png';
import MilkDesktopX2 from '../../assets/images/milk-desk@2x.png';
import HazelnutsMobileX1 from '../../assets/images/hazelnuts-mob@1x.png';
import HazelnutsMobileX2 from '../../assets/images/hazelnuts-mob@2x.png';
import HazelnutsDesktopX1 from '../../assets/images/hazelnuts-desk@1x.png';
import HazelnutsDesktopX2 from '../../assets/images/hazelnuts-desk@2x.png';
import RaisinsMobileX1 from '../../assets/images/raisins-mob@1x.png';
import RaisinsMobileX2 from '../../assets/images/raisins-mob@2x.png';
import RaisinsDesktopX1 from '../../assets/images/raisins-desk@1x.png';
import RaisinsDesktopX2 from '../../assets/images/raisins-desk@2x.png';

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
  background?: string;
  color?: string;
}

const advantages: AdvantageProps[] = [
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
      'Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they can digest solid food.',
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
      'Almonds, pistachios, and walnuts are rich in fiber and plant protein. They help reduce heart disease risk and are great snacks.',
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
      'Semi-sweet chocolate has a cocoa solid content of 35–65%. It’s darker and more bitter than milk chocolate, offering a deeper flavor profile.',
  },
];

export const UniqueComponents = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        IT ALL ADDS UP TO ONE EXCEPTIONAL{' '}
        <span className={css.highlight}>TASTE</span> SENSATION
      </h2>
      <p className={css.text}>
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </p>

      <ul className={css.componentsList}>
        {advantages.map(
          ({ images, alt, name, tags, description, background, color }, i) => (
            <li key={i} className={css.listItem}>
              <div className={css.flipCard}>
                <div
                  className={`${css.frontside} ${
                    name === 'Nuts' ? css.highlightBorder : ''
                  }`}
                  style={{
                    background: background || 'var(--bg-light)',
                    color: color || 'var(--text)',
                  }}
                >
                  <picture>
                    <source
                      srcSet={`${images.desktop} 1x, ${images.desktop2x} 2x`}
                      media="(min-width: 1200px)"
                    />
                    <source
                      srcSet={`${images.mobile} 1x, ${images.mobile2x} 2x`}
                      media="(max-width: 1199px)"
                    />
                    <img src={images.mobile} alt={alt} className={css.image} />
                  </picture>
                  <p
                    className={css.componentName}
                    style={{ color: color || 'var(--text)' }}
                  >
                    {name}
                  </p>
                </div>

                <div className={css.backside}>
                  <h3 className={css.overlayName}>{name}</h3>
                  <ul className={css.overlayTags}>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className={css.overlayTagContainer}
                        style={{
                          background:
                            index === 0
                              ? 'var(--highlight)'
                              : 'var(--bg-light)',
                        }}
                      >
                        <p
                          className={css.overlayTag}
                          style={{
                            color:
                              index === 0 ? 'var(--alt-title)' : 'var(--text)',
                          }}
                        >
                          {tag}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className={css.overlayParagraph}>{description}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
