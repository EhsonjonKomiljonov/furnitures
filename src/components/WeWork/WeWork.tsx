import { weWorkData, weWorkUzData } from '../../db/weWorkData';
import { useLangStore } from '../../stores/LangStore';
import './we-work.scss';

export const WeWork = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='we-work'>
      <div className='container'>
        <div className='we-work__inner'>
          {lang == 'en' ? (
            <h2 className='text-center mb-4'>
              <span>furniture</span> success is directly tied to three key
              elements:
            </h2>
          ) : (
            <h2 className='text-center mb-4'>
              <span>furniture</span> muvaffaqiyati bevosita uchta asosiy elementga bog'liq:
            </h2>
          )}
          <ul className='d-flex justify-content-center flex-wrap we-work__list'>
            {lang == 'en'
              ? weWorkData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))
              : weWorkUzData.map((item) => (
                  <li>
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
