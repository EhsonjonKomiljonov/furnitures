import './hero.scss';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Hero = () => {
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
    <section className='hero'>
      <div className='container'>
        <div className='hero__inner'>
          <motion.h1
            className='d-flex flex-wrap justify-content-center column-gap-2 column-gap-md-3 column-gap-lg-4'
            variants={container}
            initial='hidden'
            animate='visible'
          >
            {t('Home.Hero.Title')
              .split(' ')
              .map((item) => (
                <motion.span className='d-block' variants={child}>
                  {item}
                </motion.span>
              ))}
          </motion.h1>
          <a className='mouse' href='#about'></a>
        </div>
      </div>
    </section>
  );
};
