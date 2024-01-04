import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSaveStore } from '../../stores/SaveStore';
import { AllFurnituresCard } from '../AllFurnituresCard/AllFurnituresCard';
import './saved-all-products.scss';

export const SavedAllProducts = () => {
  const setSavedData = useSaveStore((state) => state.setSavedData);
  const savedData = useSaveStore((state) => state.savedData);
  const { t } = useTranslation();

  useEffect(() => {
    setSavedData(
      JSON.parse(localStorage.getItem('all-products') || '[]') || []
    );
  }, []);

  return (
    <section className='saved-all' id="all-saved-funritures">
      <div className='container'>
        <div className='saved-all__inner'>
          <h2 className='text-center mb-4'>
            {t('SavedProducts.AllProducts.Title')}
          </h2>
          <ul className='d-flex align-items-center justify-content-center gap-4 flex-wrap all-furnitures__list'>
            {savedData?.length ? (
              savedData.map((item) => (
                <AllFurnituresCard obj={item} key={item.id} path='saved' />
              ))
            ) : (
              <h3 className='text-center' >{t('SavedProducts.AllProducts.NotFound')}</h3>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
