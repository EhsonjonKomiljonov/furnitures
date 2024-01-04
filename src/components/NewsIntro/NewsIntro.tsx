import NewsImg from '../../assets/images/news-1.webp';
import { useLangStore } from '../../stores/LangStore';
import './news-intro.scss';

export const NewsIntro = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='news-intro'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between news-intro__inner'>
          <img src={NewsImg} alt='News' />
          {lang == 'en' ? (
            <h2>
              <span>furniture</span> wishes everyone a Happy New Year and wishes
              everyone the best!
            </h2>
          ) : (
            <h2>
              <span>furniture</span> barchani Yangi yil bilan tabriklaydi va barchaga eng yaxshi tilaklarni tilaydi
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};
