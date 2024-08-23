import { useTranslation } from 'react-i18next';
import './furnitures-intro.scss';
import { motion } from 'framer-motion';

export const FurnituresIntro = () => {
  const { t } = useTranslation();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 1 },
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
    <section className='intro'>
      <div className='container'>
        <div className='intro__inner'>
          <motion.h2
            className='d-flex gap-3 flex-wrap justify-content-center'
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {t('Furnitures.Intro.Title')
              .split(' ')
              .map((item) => (
                <motion.span variants={child}>{item}</motion.span>
              ))}
          </motion.h2>
        </div>
        <a className='mouse' href='#all-furnitures'></a>
      </div>
    </section>
  );
};
