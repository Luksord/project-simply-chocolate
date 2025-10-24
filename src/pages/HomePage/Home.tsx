import css from './Home.module.css';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../components/Hero/Hero';
import { Advantages } from '../../components/Advantages/Advantages';
import { UniqueComponents } from '../../components/UniqueComponents/UniqueComponents';
import { HowItsMade } from '../../components/HowItsMade/HowItsMade';

export const Home = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <Hero />
        <Advantages />
        <UniqueComponents />
        <HowItsMade />
      </div>
    </>
  );
};
