import { useTranslation } from 'react-i18next';
import './furnitures-intro.scss';

export const FurnituresIntro = () => {
  const { t } = useTranslation();

  return (
    <section className='intro'>
      <div className='container'>
        <div className='intro__inner'>
          <h2>{t('Furnitures.Intro.Title')}</h2>
        </div>
        <a className='mouse' href='#all-furnitures'></a>
      </div>
    </section>
  );
};
