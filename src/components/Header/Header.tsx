import { useState } from 'react';
import css from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/icons/icon-logo.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { ReactComponent as Menu } from '../../assets/icons/icon-menu.svg';
import { MobileMenu } from '../../components/MobileMenu/MobileMenu';
import { media } from '../../utils/contactData';
import { menu } from '../../utils/navData';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
          {menu.map(({ navName, navLink }) => (
            <li key={navName}>
              <a href={navLink} className={css.navItem}>
                {navName}
              </a>
            </li>
          ))}
        </ul>
        <div className={css.mediaContainer}>
          <a href={media.instagramHref}>
            <Instagram className={css.socialIcon} />
          </a>
          <a href={media.twitterHref}>
            <Twitter className={css.socialIcon} />
          </a>
        </div>
      </div>
      <Menu className={css.menuIcon} onClick={() => setMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};
