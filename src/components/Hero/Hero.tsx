import { useState } from 'react';
import css from './Hero.module.css';
import { BuyNow } from '../../components/BuyNow/BuyNow';
import { ReactComponent as ScrollArrow } from '../../assets/icons/icon-scroll-down-arrow.svg';

export const Hero = () => {
  const [isBuyNowOpen, setBuyNowOpen] = useState(false);

  return (
    <div className={css.section}>
      <div className={css.heroContainer}>
        <p className={css.heroText}>
          Treat yourself or a loved one to our finest ingredients for a moment
          of pure delight!
        </p>
        <div className={css.flexbox}>
          <div className={css.btnsContainer}>
            <button className={css.btn} onClick={() => setBuyNowOpen(true)}>
              Buy now
            </button>
            <BuyNow
              isOpen={isBuyNowOpen}
              onClose={() => setBuyNowOpen(false)}
            />
            <button className={css.btn}>
              <a href="#how-its-made" className={css.link}>
                How it’s made
              </a>
            </button>
          </div>
          <div className={css.scrollContainer}>
            <p className={css.scrollText}>scroll down</p>
            <button className={css.scrollBtn}>
              <a href="#subscribe">
                <ScrollArrow className={css.scrollIcon} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
