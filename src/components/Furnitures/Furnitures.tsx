import './furnitures.scss';
import { furnitures } from '../../db/furnituresData';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import { useTranslation } from 'react-i18next';

export const Furnitures = () => {
  const { t } = useTranslation();

  return (
    <section className='furnitures' id='furnitures'>
      <div className='container'>
        <div className='furnitures__inner'>
          <h2 className='text-center'>{t('Home.Furnitures.Title')}</h2>

          <ul className='furnitures__products d-flex align-items-center justify-content-center mt-4 flex-wrap gap-4'>
            {furnitures.map((item) => (
              <li>
                <div>
                  <img src={item.img_link} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}$</span>
              </li>
            ))}
          </ul>
          <GreenBtn text={t('Home.Furnitures.Button')} path='/furnitures' />
        </div>
      </div>
    </section>
  );
};
