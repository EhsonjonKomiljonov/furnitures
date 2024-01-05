import {
  checkOutFurnitureData,
  checkOutFurnitureUzData,
} from '../../db/checkOutFurnitureData';
import { useTranslation } from 'react-i18next';
import './check-out-furniture.scss';
import { useLangStore } from '../../stores/LangStore';
import { motion } from 'framer-motion';

export const CheckOutFurniture = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className='check-furniture'>
      <div className='container'>
        <div className='check-furniture__inner'>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } }}
            className='text-center'
          >
            {t('Home.CheckOutFurniture.Title')}
          </motion.h2>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            className='d-flex align-items-center justify-content-center flex-wrap mt-4 card-box'
          >
            {lang == 'en'
              ? checkOutFurnitureData.map((item, index) => (
                  <motion.div variants={child} key={index}>
                    <img
                      className='d-block mx-auto'
                      src={item.img}
                      alt={item.title}
                      width={80}
                    />
                    <p>{item.title}</p>
                  </motion.div>
                ))
              : checkOutFurnitureUzData.map((item, index) => (
                  <motion.div variants={child} key={index}>
                    <img
                      className='d-block mx-auto'
                      src={item.img}
                      alt={item.title}
                      width={80}
                    />
                    <p>{item.title}</p>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
