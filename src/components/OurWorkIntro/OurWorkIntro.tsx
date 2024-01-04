import { useTranslation } from 'react-i18next';
import './our-work-intro.scss';

export const OurWorkIntro = () => {
  const { t } = useTranslation();

  return (
    <section className='our-work-intro'>
      <div className='container'>
        <div className='our-work-intro__inner'>
          <h2>{t('OurWork.Intro.Title')}</h2>
        </div>
        <a className='mouse' href='#our-masters'></a>
      </div>
    </section>
  );
};
