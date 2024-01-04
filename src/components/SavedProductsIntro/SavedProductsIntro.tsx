import { useTranslation } from 'react-i18next';
import './saved-products-intro.scss';

export const SavedProductsIntro = () => {
  const { t } = useTranslation();

  return (
    <section className='saved-intro'>
      <div className='container'>
        <div className='saved-intro__inner'>
          <h2>{t('SavedProducts.Intro.Title')}</h2>
        </div>
        <a className='mouse' href='#all-saved-funritures'></a>
      </div>
    </section>
  );
};
