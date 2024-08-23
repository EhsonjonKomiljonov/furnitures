import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  allFurnituresData,
  allFurnituresUzData,
} from '../../db/allFurnituresData';
import { useLangStore } from '../../stores/LangStore';
import { AllFurnituresCard } from '../AllFurnituresCard/AllFurnituresCard';
import './all-furnitures.scss';

export const AllFurnitures = () => {
  const lang = useLangStore((state) => state.lang);
  const [category, setCategory] = useState(
    lang == 'en' ? 'popular' : 'ommabop'
  );
  const { t } = useTranslation();

  const handleSetCategory = (text: string) => {
    setCategory(text);
  };

  useEffect(() => {
    setCategory(lang == 'en' ? 'popular' : 'ommabop');
  }, [lang]);

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

  return (
    <section className='all-furnitures' id='all-furnitures'>
      <div className='container'>
        <div className='all-furnitures__inner'>
          <h2 className='text-center mb-4'>
            {t('Furnitures.AllFurnitures.Title')}
          </h2>
          <div className='dropdown'>
            <button
              className='btn dropdown-toggle'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {category}
            </button>
            <ul className='dropdown-menu'>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'popular' : 'ommabop')
                  }
                >
                  {lang == 'en' ? 'popular' : 'ommabop'}
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'chairs' : 'stul')
                  }
                >
                  {lang == 'en' ? 'chairs' : 'stul'}
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'drawers' : 'tortma')
                  }
                >
                  {lang == 'en' ? 'drawers' : 'tortma'}
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'beds' : "to'shak")
                  }
                >
                  {lang == 'en' ? 'beds' : "to'shak"}
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'tables' : 'stol')
                  }
                >
                  {lang == 'en' ? 'tables' : 'stol'}
                </button>
              </li>
              <li>
                <button
                  className='dropdown-item'
                  onClick={() =>
                    handleSetCategory(lang == 'en' ? 'closet' : 'shkaf')
                  }
                >
                  {lang == 'en' ? 'closet' : 'shkaf'}
                </button>
              </li>
            </ul>
          </div>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='d-flex align-items-center justify-content-center flex-wrap all-furnitures__list'
          >
            {lang == 'en'
              ? allFurnituresData.map((item) => {
                  if (item.category == category) {
                    return <AllFurnituresCard obj={item} key={item.id} />;
                  } else if (category == 'popular')
                    return <AllFurnituresCard obj={item} key={item.id} />;
                })
              : allFurnituresUzData.map((item) => {
                  if (item.category == category) {
                    return <AllFurnituresCard obj={item} key={item.id} />;
                  } else if (category == 'ommabop')
                    return <AllFurnituresCard obj={item} key={item.id} />;
                })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
