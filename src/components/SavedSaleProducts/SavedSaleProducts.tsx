import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSaveSaleStore } from '../../stores/SaveSaleStore';
import { SaleFurnituresCard } from '../SaleFurnituresCard/SaleFurnituresCard';
import './saved-sale-products.scss';

export const SavedSaleProducts = () => {
  const setSaveSaleData = useSaveSaleStore((state) => state.setSavedData);
  const savedSaleData = useSaveSaleStore((state) => state.savedData);
  const { t } = useTranslation();

  useEffect(() => {
    setSaveSaleData(
      JSON.parse(localStorage.getItem('sale-products') || '{}') || []
    );
  }, []);

  return (
    <section className='saved-sale'>
      <div className='container'>
        <div className='saved-all__inner'>
          <h2 className='text-center mb-4'>
            {t('SavedProducts.SaleProducts.Title')}
          </h2>
          <ul className='d-flex align-items-center justify-content-center flex-wrap all-furnitures__list gap-4'>
            {savedSaleData.map((item) => (
              <SaleFurnituresCard obj={item} key={item.id} path='saved' />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
