import css from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/icon-logo.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as MobileMenu } from '../../assets/icons/icon-menu.svg';

export const Header = () => {
  return (
    <div className={css.section}>
      <div className={css.logoContainer}>
        <p className={css.logoText}>
          <span className={css.logoSpan}>Simply</span> Chocolate
        </p>
        <Logo className={css.logoIcon} />
      </div>
      <div className={css.navContainer}>
        <ul className={css.navList}>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>How it’s made?</p>
          </li>
          <li>
            <p>Our products</p>
          </li>
          <li>
            <p>Top sellers</p>
          </li>
          <li>
            <p>Chocolate is loved</p>
          </li>
        </ul>
        <div className={css.mediaContainer}>
          <Instagram className={css.socialIcon} />
          <Twitter className={css.socialIcon} />
        </div>
      </div>
      <MobileMenu className={css.menuIcon} />
    </div>
  );
};
