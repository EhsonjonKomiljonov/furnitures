import { useTranslation } from 'react-i18next';
import { ourMastersData, ourMastersUzData } from '../../db/ourMastersData';
import { useLangStore } from '../../stores/LangStore';
import './our-masters.scss';

export const OurMasters = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='our-masters' id='our-masters'>
      <div className='container'>
        <div className='our-masters__inner'>
          <h2 className='text-center'>{t('OurWork.OurMasters.Title')}</h2>
          <ul className='d-flex justify-content-center gap-5 flex-wrap mt-4 flex-row-reverse'>
            {lang == 'en'
              ? ourMastersData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))
              : ourMastersUzData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
