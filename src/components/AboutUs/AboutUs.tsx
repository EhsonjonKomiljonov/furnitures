import { useTranslation } from 'react-i18next';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import { motion } from 'framer-motion';
import './about-us.scss';

export const AboutUs = () => {
  const { t } = useTranslation();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  const child = {
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
    <section className='about-us' id='about' data-aos='zoom-out-up'>
      <div className='container'>
        <div className='about-us__inner'>
          <motion.h2
            viewport={{ once: true }}
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          >
            {t('Home.About.Title')}
          </motion.h2>
          <motion.p
            className='d-flex flex-wrap justify-content-center'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {t('Home.About.Desc')
              .split(' ')
              .map((item) => (
                <motion.span className='d-inline-block ms-1' variants={child}>
                  {item}
                </motion.span>
              ))}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 5.5, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            <GreenBtn text={t('Home.About.Button')} path='/contact' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
