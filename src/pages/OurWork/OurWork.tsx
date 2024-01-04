import Footer from '../../components/Footer/Footer';
import { OurMasters } from '../../components/OurMasters/OurMasters';
import { OurMastersWork } from '../../components/OurMastersWork/OurMastersWork';
import { OurWorkIntro } from '../../components/OurWorkIntro/OurWorkIntro';

const OurWork = () => {
  return (
    <>
      <main>
        <OurWorkIntro />
        <OurMasters />
        <OurMastersWork />
      </main>
      <Footer />
    </>
  );
};

export default OurWork;
