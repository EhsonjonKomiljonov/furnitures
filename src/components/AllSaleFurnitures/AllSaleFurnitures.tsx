import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  saleFurnituresData,
  saleFurnituresUzData,
} from '../../db/saleFurnituresData';
import { useLangStore } from '../../stores/LangStore';
import { SaleFurnituresCard } from '../SaleFurnituresCard/SaleFurnituresCard';
import './all-sale-furnitures.scss';

export const AllSaleFurnitures = () => {
  const lang = useLangStore((state) => state.lang);
  const { t } = useTranslation();

  return (
    <section className='all-sale-furnitures'>
      <div className='container'>
        <div className='all-sale-furnitures__inner'>
          <motion.h2
            initial={{ scale: 0.5 }}
            whileInView={{
              scale: [0.5, 0.9, 1, 1.1, 1.1, 1],
              rotate: [5, -5, 7, -2, 8, -6, 0],
              transition: { duration: 0.8, delay: 0.7 },
            }}
            viewport={{ once: true }}
            className='text-center'
          >
            {t('Furnitures.AllSaleFurnitures.Title')}
          </motion.h2>
          <motion.ul
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
            className='furnitures__products d-flex align-items-center justify-content-center mt-4 flex-wrap gap-4'
          >
            {lang == 'en'
              ? saleFurnituresData.map((item) => (
                  <SaleFurnituresCard obj={item} key={item.id} />
                ))
              : saleFurnituresUzData.map((item) => (
                  <SaleFurnituresCard obj={item} key={item.id} />
                ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
