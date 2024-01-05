import './sale-furnitures.scss';
import {
  saleFurnituresData,
  saleFurnituresUzData,
} from '../../db/saleFurnituresData';
import { GreenBtn } from '../GreenBtn/GreenBtn';
import { useTranslation } from 'react-i18next';
import { SaleFurnituresCard } from '../SaleFurnituresCard/SaleFurnituresCard';
import { useLangStore } from '../../stores/LangStore';
import { motion } from 'framer-motion';

export const SaleFurnitures = () => {
  const { t } = useTranslation();
  const lang = useLangStore((state) => state.lang);

  return (
    <section className='sale-furnitures' id='furnitures'>
      <div className='container'>
        <div className='sale-furnitures__inner'>
          <motion.h2
            initial={{ scale: 1 }}
            whileInView={{
              scale: [1, 1.1, 1],
              rotateX: [0, 180, 0],
              transition: { duration: 1, delay: 1 },
            }}
            className='text-center'
          >
            {t('Home.Furnitures.Title')}
          </motion.h2>
          <motion.ul
            initial={{ y: 100 }}
            whileInView={{
              y: 0,
              transition: { duration: 1 },
            }}
            className='furnitures__products d-flex align-items-center justify-content-center mt-4 flex-wrap gap-4'
          >
            {lang == 'en'
              ? saleFurnituresData
                  .slice(0, 4)
                  .map((item) => (
                    <SaleFurnituresCard obj={item} key={item.id} />
                  ))
              : saleFurnituresUzData
                  .slice(0, 4)
                  .map((item) => (
                    <SaleFurnituresCard obj={item} key={item.id} />
                  ))}
          </motion.ul>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            <GreenBtn text={t('Home.Furnitures.Button')} path='/furnitures' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
