import './hero.scss';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__inner'>
          <h1>
            {t('Home.Hero.Title')}
          </h1>
          <a className='mouse' href='#about'></a>
        </div>
      </div>
    </section>
  );
};
