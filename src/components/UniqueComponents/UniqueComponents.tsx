import { useState } from 'react';
import css from './UniqueComponents.module.css';
import { advantages } from '../../utils/adventagesData';

export const UniqueComponents = () => {
  const [activeTab, setActiveTab] = useState<number[]>(() =>
    advantages.map(() => 0)
  );

  return (
    <section className={css.section}>
      <h2 className={css.title}>
        IT ALL ADDS UP TO ONE EXCEPTIONAL{' '}
        <span className={css.highlight}>TASTE</span> SENSATION
      </h2>

      <p className={css.text}>
        At Simply Chocolate, we believe that the secret to exceptional
        chocolate...
      </p>

      <ul className={css.componentsList}>
        {advantages.map(
          (
            {
              images,
              alt,
              name,
              tags,
              description,
              benefits,
              background,
              color,
            },
            i
          ) => (
            <li key={i} className={css.listItem}>
              <div className={css.flipCard}>
                {/* ---------- FRONTSIDE ---------- */}
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

                {/* ---------- BACKSIDE ---------- */}
                <div className={css.backside}>
                  <h3 className={css.overlayName}>{name}</h3>

                  <ul className={css.overlayTags}>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        className={`${css.overlayTagContainer} ${
                          activeTab[i] === index ? css.activeTag : ''
                        }`}
                        onClick={() =>
                          setActiveTab(prev => {
                            const updated = [...prev];
                            updated[i] = index;
                            return updated;
                          })
                        }
                        style={{ cursor: 'pointer' }}
                      >
                        <p className={css.overlayTag}>{tag}</p>
                      </li>
                    ))}
                  </ul>

                  <p className={css.overlayParagraph}>
                    {activeTab[i] === 0 ? description : benefits.join(', ')}
                  </p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
