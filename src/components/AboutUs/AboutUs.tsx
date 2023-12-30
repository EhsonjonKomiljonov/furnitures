import { useTranslation } from 'react-i18next';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import './about-us.scss';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className='about-us' id='about' data-aos='zoom-out-up'>
      <div className='container'>
        <div className='about-us__inner'>
          <h2>{t('Home.About.Title')}</h2>
          <p>{t('Home.About.Desc')}</p>
          <GreenBtn text={t('Home.About.Button')} path='/contact' />
        </div>
      </div>
    </section>
  );
};
