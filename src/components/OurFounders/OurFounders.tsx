import { ourFoundersData, ourFoundersUzData } from '../../db/ourFoundersData';
import { useLangStore } from '../../stores/LangStore';
import { motion } from 'framer-motion';
import './our-founders.scss';
import { useTranslation } from 'react-i18next';

export const OurFounders = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation();

  return (
    <section className='our-founders'>
      <div className='container'>
        <div className='our-founders__inner'>
          <motion.h2
            whileInView={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.9, 1],
              loop: Infinity,
            }}
          >
            {t('Home.OurFounders.Title')}
          </motion.h2>
          <motion.ul
            whileInView={{
              scale: [1, 1.1, 1],
              transition: { duration: 2, delay: 1 },
            }}
            className='d-flex justify-content-center flex-wrap'
          >
            {lang == 'en'
              ? ourFoundersData.map((item, index) => (
                  <motion.li key={index}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </motion.li>
                ))
              : ourFoundersUzData.map((item, index) => (
                  <motion.li
                    initial={{ scale: 1, x: 50 }}
                    whileInView={{
                      scale: [1, 1.1, 1],
                      x: 0,
                      transition: { duration: 2, delay: 1 },
                    }}
                    key={index}
                  >
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </motion.li>
                ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
