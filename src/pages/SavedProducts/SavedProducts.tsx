import Footer from '../../components/Footer/Footer';
import { SavedAllProducts } from '../../components/SavedAllProducts/SavedAllProducts';
import { SavedProductsIntro } from '../../components/SavedProductsIntro/SavedProductsIntro';
import { SavedSaleProducts } from '../../components/SavedSaleProducts/SavedSaleProducts';
import { useSaveSaleStore } from '../../stores/SaveSaleStore';

const SavedProducts = () => {
  const savedSaleData = useSaveSaleStore((state) => state.savedData);

  return (
    <>
      <main>
        <SavedProductsIntro />
        <SavedAllProducts />
        {savedSaleData.length ? <SavedSaleProducts /> : ''}
      </main>
      <Footer />
    </>
  );
};

export default SavedProducts;
