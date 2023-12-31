import { useTranslation } from 'react-i18next';
import { useLangStore } from '../../stores/LangStore';
import './sale.scss';

export const Sale = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='sale'>
      <div className='container'>
        <div className='sale__inner d-flex align-items-center justify-content-between'>
          <div className='sale__info'>
            <h2>{t('Home.Sale.Title')}</h2>
            <p>{t('Home.Sale.Desc')}</p>
            <span>{t('Home.Sale.SaleDate')}</span>
          </div>
          <div className='sale__content'>
            {lang == 'en' ? (
              <h3>
                The <span>furniture</span> Winter Sale!
              </h3>
            ) : (
              <h3>
                <span>furniture</span> dan qishki chegirma!
              </h3>
            )}
            <p>
              {t('Home.Sale.SubDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
