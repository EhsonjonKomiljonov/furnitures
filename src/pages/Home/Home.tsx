import { AboutUs } from '../../components/AboutUs/AboutUs';
import { CheckOutFurniture } from '../../components/CheckOutFurniture/CheckOutFurniture';
import { SaleFurnitures } from '../../components/SaleFurnitures/SaleFurnitures';
import { Hero } from '../../components/Hero/Hero';
import { OurFounders } from '../../components/OurFounders/OurFounders';
import { Sale } from '../../components/Sale/Sale';
import { WeWork } from '../../components/WeWork/WeWork';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutUs />
        <CheckOutFurniture />
        <Sale />
        <SaleFurnitures />
        <WeWork />
        <OurFounders />
      </main>
      <Footer />
    </>
  );
};

export default Home;
