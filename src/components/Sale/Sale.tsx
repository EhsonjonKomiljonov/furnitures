import { useTranslation } from 'react-i18next';
import { useLangStore } from '../../stores/LangStore';
import { motion } from 'framer-motion';
import './sale.scss';

export const Sale = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 2.5 },
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

  // DESC ANIMATION

  const containerDesc = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 4 },
    },
  };

  return (
    <section className='sale'>
      <div className='container'>
        <div className='sale__inner d-flex align-items-center justify-content-between'>
          <div className='sale__info'>
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                scale: [1, 1, 1.2, 1],
                transition: { duration: 1.4, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              {t('Home.Sale.Title')}
            </motion.h2>
            <motion.p
              initial={{ scale: 1, opacity: 0 }}
              whileInView={{
                opacity: 1,
                scale: [1, 2, 1],
                rotateY: [0, 0, 0, 180, 0],
                transition: { duration: 1.5, delay: 1 },
              }}
              viewport={{ once: true }}
            >
              {t('Home.Sale.Desc')}
            </motion.p>
            <motion.span
              className='d-flex justify-content-center column-gap-1'
              variants={container}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {t('Home.Sale.SaleDate')
                .split(' ')
                .map((item) => (
                  <motion.span variants={child}>{item}</motion.span>
                ))}
            </motion.span>
          </div>
          <div className='sale__content'>
            {lang == 'en' ? (
              <motion.h3
                initial={{ x: -100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 3 },
                }}
                viewport={{ once: true }}
              >
                The <span>furniture</span> Winter Sale!
              </motion.h3>
            ) : (
              <motion.h3
                initial={{ x: 100, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, delay: 3 },
                }}
                viewport={{ once: true }}
              >
                <span>furniture</span> dan qishki chegirma!
              </motion.h3>
            )}
            <motion.p
              className='d-flex flex-wrap column-gap-1'
              variants={containerDesc}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              {t('Home.Sale.SubDesc')
                .split(' ')
                .map((item) => (
                  <motion.span variants={child}>{item}</motion.span>
                ))}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
