import css from './Advantages.module.css';
import { ReactComponent as ChocolateBarIcon } from '../../assets/icons/icon-chocolate-bar.svg';
import { ReactComponent as CoinIcon } from '../../assets/icons/icon-coin.svg';
import { ReactComponent as SpoonIcon } from '../../assets/icons/icon-spoon.svg';

export const Advantages = () => {
  return (
    <div className={css.section}>
      <ul className={css.advantagesList}>
        <li className={css.listItem}>
          <div className={css.iconContainer}>
            <ChocolateBarIcon className={css.icon} />
          </div>
          <p className={css.title}>Unsurpassed taste</p>
          <p className={css.text}>
            Crafted with the finest quality cocoa beans and a dedication to
            perfection, each bite is a decadent experience that simply cannot be
            matched. Savor the richness and complexity of our Unsurpassed Taste
            and discover a new level of chocolate bliss.
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.iconContainer}>
            <CoinIcon className={css.icon} />
          </div>
          <p className={css.title}>Affordable price</p>
          <p className={css.text}>
            Indulge in high-quality chocolate without breaking the bank with
            Simply Chocolate's selection of affordable treats. Enjoy
            mouth-watering truffles and velvety chocolate bars without
            sacrificing taste or quality. Browse our selection and indulge in
            affordable luxury today.
          </p>
        </li>
        <li className={css.listItem}>
          <div className={css.iconContainer}>
            <SpoonIcon className={css.icon} />
          </div>
          <p className={css.title}>Own production</p>
          <p className={css.text}>
            We take pride in our own production process, ensuring that every
            step is carefully crafted to perfection. From selecting the finest
            ingredients to handcrafting each piece, our attention to detail is
            evident in every bite.
          </p>
        </li>
      </ul>
    </div>
  );
};
