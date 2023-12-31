import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CheckOutFurniture } from '../../components/CheckOutFurniture/CheckOutFurniture';
import { Furnitures } from '../../components/Furnitures/Furnitures';
import { Hero } from '../../components/Hero/Hero';
import { OurFounders } from '../../components/OurFounders/OurFounders';
import { Sale } from '../../components/Sale/Sale';
import { WeWork } from '../../components/WeWork/WeWork';

export const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <CheckOutFurniture />
      <Sale />
      <Furnitures />
      <WeWork />
      <OurFounders />
    </main>
  );
};
