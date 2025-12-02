import { useState } from 'react';
import css from './Subscribe.module.css';
import { PopUp } from '../../components/PopUp/PopUp';

export const Subscribe = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  return (
    <section className={css.section}>
      <div className={css.heroContainer}>
        <h2 className={css.title}>Explore our new chocolate first</h2>
        <p className={css.text}>
          From the velvety texture to the rich and complex flavor, our New
          Chocolate is a true indulgence that will leave you craving more. Made
          with only the finest ingredients and handcrafted with the utmost care,
          each piece is a work of art that is sure to please.
        </p>
        <button className={css.button} onClick={() => setPopUpOpen(true)}>
          Subscribe
        </button>
        <PopUp isOpen={isPopUpOpen} onClose={() => setPopUpOpen(false)} />
      </div>
    </section>
  );
};
