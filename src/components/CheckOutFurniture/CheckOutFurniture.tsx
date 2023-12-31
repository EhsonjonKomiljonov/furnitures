import {
  checkOutFurnitureData,
  checkOutFurnitureUzData,
} from '../../db/checkOutFurnitureData';
import { useTranslation } from 'react-i18next';
import './check-out-furniture.scss';
import { useLangStore } from '../../stores/LangStore';

export const CheckOutFurniture = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='check-furniture'>
      <div className='container'>
        <div className='check-furniture__inner'>
          <h2 className='text-center'>{t('Home.CheckOutFurniture.Title')}</h2>
          <ul className='d-flex align-items-center justify-content-center flex-wrap mt-4'>
            {lang == 'en'
              ? checkOutFurnitureData.map((item) => (
                  <li>
                    <img
                      className='d-block mx-auto'
                      src={item.img}
                      alt={item.title}
                      width={80}
                    />
                    <p>{item.title}</p>
                  </li>
                ))
              : checkOutFurnitureUzData.map((item) => (
                  <li>
                    <img
                      className='d-block mx-auto'
                      src={item.img}
                      alt={item.title}
                      width={80}
                    />
                    <p>{item.title}</p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
