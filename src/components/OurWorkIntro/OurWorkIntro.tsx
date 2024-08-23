import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './our-work-intro.scss';

export const OurWorkIntro = () => {
  const { t } = useTranslation();

  return (
    <section className='our-work-intro'>
      <div className='container'>
        <div className='our-work-intro__inner'>
          <motion.h2
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.7, once: true },
            }}
            viewport={{ once: true }}
          >
            {t('OurWork.Intro.Title')}
          </motion.h2>
        </div>
        <a className='mouse' href='#our-masters'></a>
      </div>
    </section>
  );
};
