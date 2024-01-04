import { useTranslation } from 'react-i18next';
import { ourMastersWorkData } from '../../db/ourMastersWorkData';
import { useLangStore } from '../../stores/LangStore';
import './our-masters-work.scss';

export const OurMastersWork = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='our-masters-work'>
      <div className='container'>
        <div className='our-masters-work__inner'>
          <h2 className='text-center fw-bold mb-4'>
            {t('OurWork.OurMastersWork.Title')}
          </h2>
          <ul className='d-flex justify-content-center flex-wrap gap-5'>
            {lang == 'en'
              ? ourMastersWorkData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3 className='mt-3' >{item.title}</h3>
                  </li>
                ))
              : ourMastersWorkData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3 className='mt-3' >{item.title}</h3>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
