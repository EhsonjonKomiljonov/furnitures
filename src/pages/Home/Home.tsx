import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CheckOutFurniture } from '../../components/CheckOutFurniture/CheckOutFurniture';
import { Furnitures } from '../../components/Furnitures/Furnitures';
import { Hero } from '../../components/Hero/Hero';
import { Sale } from '../../components/Sale/Sale';

export const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <CheckOutFurniture />
      <Sale />
      <Furnitures />
    </main>
  );
};
