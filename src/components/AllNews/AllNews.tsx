import { useTranslation } from 'react-i18next';
import { newsData, newsUzData } from '../../db/newsData';
import { useLangStore } from '../../stores/LangStore';
import './all-news.scss';

export const AllNews = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation();

  return (
    <section className='all-news'>
      <div className='container'>
        <div className='all-news__inner'>
          <h2 className='text-center fw-bold mb-4'>
            {t('News.AllNews.Title')}
          </h2>
          <ul className='d-flex justify-content-center gap-5 flex-wrap'>
            {lang == 'en'
              ? newsData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3 className='mt-3 text-center'>{item.title}</h3>
                  </li>
                ))
              : newsUzData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3 className='mt-3 text-center'>{item.title}</h3>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
