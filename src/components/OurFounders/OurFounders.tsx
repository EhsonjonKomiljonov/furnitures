import { ourFoundersData, ourFoundersUzData } from '../../db/ourFoundersData';
import { useLangStore } from '../../stores/LangStore';
import './our-founders.scss';

export const OurFounders = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='our-founders'>
      <div className='container'>
        <div className='our-founders__inner'>
          <h2 className='text-center mb-4'>Our Founders</h2>
          <ul className='d-flex justify-content-center flex-wrap'>
            {lang == 'en'
              ? ourFoundersData.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </li>
                ))
              : ourFoundersUzData.map((item, index) => (
                  <li key={index}>
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
