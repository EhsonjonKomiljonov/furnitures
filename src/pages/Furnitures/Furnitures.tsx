import { AllFurnitures } from '../../components/AllFurnitures/AllFurnitures';
import { AllSaleFurnitures } from '../../components/AllSaleFurnitures/AllSaleFurnitures';
import Footer from '../../components/Footer/Footer';
import { FurnituresIntro } from '../../components/FurnituresIntro/FurnituresIntro';

const Furnitures = () => {
  return (
    <>
      <main>
        <FurnituresIntro />
        <AllFurnitures />
        <AllSaleFurnitures />
      </main>
      <Footer />
    </>
  );
};

export default Furnitures;
