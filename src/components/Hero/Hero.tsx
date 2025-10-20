import css from './Hero.module.css';
import { ReactComponent as ScrollArrow } from '../../assets/icons/icon-scroll-down-arrow.svg';

export const Hero = () => {
  return (
    <div className={css.section}>
      <div className={css.heroContainer}>
        <div>
          <p className={css.heroText}>
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </p>
          <div className={css.flexbox}>
            <div className={css.btnsContainer}>
              <button className={css.btn}>Buy now</button>
              <button className={css.btn}>How it’s made</button>
            </div>
            <div className={css.scrollContainer}>
              <p className={css.scrollText}>scroll down</p>
              <button className={css.scrollBtn}>
                <ScrollArrow className={css.scrollIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
