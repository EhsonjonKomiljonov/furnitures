import { useTranslation } from 'react-i18next';
import {
  saleFurnituresData,
  saleFurnituresUzData,
} from '../../db/saleFurnituresData';
import { useLangStore } from '../../stores/LangStore';
import { SaleFurnituresCard } from '../SaleFurnituresCard/SaleFurnituresCard';
import './all-sale-furnitures.scss';

export const AllSaleFurnitures = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation();

  return (
    <section className='all-sale-furnitures'>
      <div className='container'>
        <div className='all-sale-furnitures__inner'>
          <h2 className='text-center'>
            {t('Furnitures.AllSaleFurnitures.Title')}
          </h2>
          <ul className='furnitures__products d-flex align-items-center justify-content-center mt-4 flex-wrap gap-4'>
            {lang == 'en'
              ? saleFurnituresData.map((item) => (
                  <SaleFurnituresCard obj={item} key={item.id} />
                ))
              : saleFurnituresUzData.map((item) => (
                  <SaleFurnituresCard obj={item} key={item.id} />
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
