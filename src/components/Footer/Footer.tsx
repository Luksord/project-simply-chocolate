import css from './Footer.module.css';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';
import { menu } from '../../utils/navData';
import { media } from '../../utils/contactData';
import { contact } from '../../utils/contactData';

export const Footer = () => {
  return (
    <section className={css.section}>
      <div className={css.titleFlexbox}>
        <h2 className={css.title}>
          <span className={css.highlight}>Chocolate</span> a delicious cure for
          a bad day
        </h2>
        <div className={css.flexbox}>
          <div className={css.contactContainer}>
            <p className={css.header}>Contact us</p>
            <a href={contact.phoneHref}>
              <p className={css.contact}>{contact.phone}</p>
            </a>
            <a href={contact.emailHref}>
              <p className={css.contact}>{contact.email}</p>
            </a>
          </div>
          <div className={css.mediaContainer}>
            <a href={media.instagramHref}>
              <Instagram className={css.icon} />
            </a>
            <a href={media.twitterHref}>
              <Twitter className={css.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={css.line} />
      <div className={css.nav}>
        <ul className={css.navList}>
          {menu.map(({ navName, navLink }) => (
            <li key={navName}>
              <a href={navLink} className={css.navItem}>
                {navName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
