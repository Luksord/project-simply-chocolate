import { useState, useRef, useEffect } from 'react';
import css from './OurProducts.module.css';
import { products } from '../../utils/productsData';

export const OurProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const list = listRef.current;
    const item = list.children[activeIndex] as HTMLElement;
    if (item) {
      const offset =
        item.offsetLeft - (list.clientWidth / 2 - item.clientWidth / 2);
      list.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className={css.section}>
      <h2 className={css.title}>
        Our <span className={css.highlight}>products</span>
      </h2>

      <div className={css.flexbox}>
        <ul className={css.productsList} ref={listRef}>
          {products.map(({ images, alt, name, type, price }, index) => (
            <li
              key={index}
              className={`${css.listItem} ${
                index === activeIndex ? css.active : ''
              }`}
            >
              <picture>
                <source srcSet={`${images.x1} 1x, ${images.x2} 2x`} />
                <img
                  src={images.x1}
                  alt={alt}
                  className={css.image}
                  loading="lazy"
                />
              </picture>
              <h3 className={css.name}>{name}</h3>
              <p className={css.type}>{type}</p>
              <div className={css.price}>{price}</div>
            </li>
          ))}
        </ul>
        <div className={css.sliderContainer}>
          {products.map((_, index) => (
            <button
              key={index}
              className={`${css.slider} ${
                activeIndex === index ? css.active : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
