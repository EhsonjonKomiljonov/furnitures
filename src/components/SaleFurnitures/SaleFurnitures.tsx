import './sale-furnitures.scss';
import {
  saleFurnituresData,
  saleFurnituresUzData,
} from '../../db/saleFurnituresData';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import { useTranslation } from 'react-i18next';
import { SaleFurnituresCard } from '../SaleFurnituresCard/SaleFurnituresCard';
import { useLangStore } from '../../stores/LangStore';

export const SaleFurnitures = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='sale-furnitures' id='furnitures'>
      <div className='container'>
        <div className='sale-furnitures__inner'>
          <h2 className='text-center'>{t('Home.Furnitures.Title')}</h2>

          <ul className='furnitures__products d-flex align-items-center justify-content-center mt-4 flex-wrap gap-4'>
            {lang == 'en'
              ? saleFurnituresData
                  .slice(0, 4)
                  .map((item) => <SaleFurnituresCard obj={item} key={item.id} />)
              : saleFurnituresUzData
                  .slice(0, 4)
                  .map((item) => <SaleFurnituresCard obj={item} key={item.id} />)}
          </ul>
          <GreenBtn text={t('Home.Furnitures.Button')} path='/furnitures' />
        </div>
      </div>
    </section>
  );
};
