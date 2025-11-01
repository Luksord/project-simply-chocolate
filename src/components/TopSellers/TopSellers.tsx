import css from './TopSellers.module.css';
import Img1DeskX1 from '../../assets/images/top-sellers-img1-desk@1x.png';
import Img1DeskX2 from '../../assets/images/top-sellers-img1-desk@2x.png';
import Img2DeskX1 from '../../assets/images/top-sellers-img2-desk@1x.png';
import Img2DeskX2 from '../../assets/images/top-sellers-img2-desk@2x.png';
import Img3DeskX1 from '../../assets/images/top-sellers-img3-desk@1x.png';
import Img3DeskX2 from '../../assets/images/top-sellers-img3-desk@2x.png';

export const TopSellers = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        <span className={css.highlight}>Top</span> Sellers
      </h2>

      <div className={css.imagesContainer}>
        <picture>
          <source srcSet={`${Img1DeskX1} 1x, ${Img1DeskX2} 2x`} />
          <img
            src={Img1DeskX1}
            alt="Cacao beans and chocolate bars."
            className={css.image}
            loading="lazy"
          />
        </picture>

        <picture>
          <source srcSet={`${Img2DeskX1} 1x, ${Img2DeskX2} 2x`} />
          <img
            src={Img2DeskX1}
            alt="Chocolate bits stack."
            className={css.image}
            loading="lazy"
          />
        </picture>

        <picture className={css.hidden}>
          <source srcSet={`${Img3DeskX1} 1x, ${Img3DeskX2} 2x`} />
          <img
            src={Img3DeskX1}
            alt="Chocolate bars stacked into a tower."
            className={css.image}
            loading="lazy"
          />
        </picture>
      </div>

      <div className={css.flexbox}>
        <p className={css.text}>
          Crazy enough chocolate originates from a bean just like the coffee
          bean called Cacao. Cacao has been around for thousands of years and
          was first discovered by the Native American tribe called the Mayans.
        </p>
        <button className={css.button}>Buy now</button>
      </div>
    </section>
  );
};
