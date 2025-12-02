import css from './Home.module.css';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Advantages } from '../../components/Advantages/Advantages';
import { UniqueComponents } from '../../components/UniqueComponents/UniqueComponents';
import { HowItsMade } from '../../components/HowItsMade/HowItsMade';
import { OurProducts } from '../../components/OurProducts/OurProducts';
import { TopSellers } from '../../components/TopSellers/TopSellers';
import { Comments } from '../../components/Comments/Comments';
import { Subscribe } from '../../components/Subscribe/Subscribe';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <div id="home">
          <Hero />
        </div>
        <Advantages />
        <UniqueComponents />
        <div id="how-its-made">
          <HowItsMade />
        </div>
        <div id="our-products">
          <OurProducts />
        </div>
        <div id="top-sellers">
          <TopSellers />
        </div>
        <div id="comments">
          <Comments />
        </div>
        <div id="subscribe">
          <Subscribe />
        </div>
        <Footer />
      </div>
    </>
  );
};
