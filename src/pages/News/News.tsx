import { AllNews } from '../../components/AllNews/AllNews';
import Footer from '../../components/Footer/Footer';
import { NewsIntro } from '../../components/NewsIntro/NewsIntro';

const News = () => {
  return (
    <>
      <main>
        <NewsIntro />
        <AllNews />
      </main>
      <Footer />
    </>
  );
};

export default News;
