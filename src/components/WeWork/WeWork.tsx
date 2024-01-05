import { weWorkData, weWorkUzData } from '../../db/weWorkData';
import { useLangStore } from '../../stores/LangStore';
import { motion } from 'framer-motion';
import './we-work.scss';

export const WeWork = () => {
  const lang = useLangStore((state) => state.lang);

  const textCont = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.013, delayChildren: 0.1 },
    },
  };

  const textChild = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 'spring',
      },
    },
  };

  return (
    <section className='we-work'>
      <div className='container'>
        <div className='we-work__inner'>
          {lang == 'en' ? (
            <motion.h2
              className='text-center mb-4'
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <span>furniture</span> success is directly tied to three key
              elements:
            </motion.h2>
          ) : (
            <motion.h2
              className='text-center mb-4'
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <span>furniture</span> muvaffaqiyati bevosita uchta asosiy
              elementga bog'liq:
            </motion.h2>
          )}
          <ul className='d-flex justify-content-center flex-wrap we-work__list'>
            {lang == 'en'
              ? weWorkData.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt={item.title} />
                    <motion.h3
                      initial={{ scale: 1, y: -30, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        scale: [1, 1.3, 1],
                        transition: { duration: 1, delay: 1 },
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      variants={textCont}
                      initial='hidden'
                      whileInView='visible'
                    >
                      {item.desc.split('').map((item) => (
                        <motion.span variants={textChild}>{item}</motion.span>
                      ))}
                    </motion.p>
                  </li>
                ))
              : weWorkUzData.map((item, index) => (
                  <li key={index}>
                    <img src={item.img} alt={item.title} />
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{
                        scale: [1, 1.1, 1],
                        transition: { duration: 0.7, delay: 1 },
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      variants={textCont}
                      initial='hidden'
                      whileInView='visible'
                    >
                      {item.desc.split('').map((item) => (
                        <motion.span variants={textChild}>{item}</motion.span>
                      ))}
                    </motion.p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
