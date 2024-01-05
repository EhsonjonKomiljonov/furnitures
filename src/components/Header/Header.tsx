import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EditLang } from '../EditLang/EditLang';
import SavedIcon from '../../assets/images/saved-icon.svg';
import { motion } from 'framer-motion';
import './header.scss';

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { t } = useTranslation();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  return (
    <>
      <header className={`site-header ${isScroll ? 'scrolled' : ''}`}>
        <div className='container'>
          <div className='site-header__inner d-flex align-items-center justify-content-between'>
            <motion.a
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              className='logo'
              href='/'
            >
              furniture
            </motion.a>
            <nav className='nav'>
              <ul className='w-100 d-flex align-items-center justify-content-between'>
                <motion.li
                  initial={{ y: -50 }}
                  animate={{ y: 0, transition: { duration: 1, delay: 0.25 } }}
                >
                  <NavLink to='/'>{t('Header.AboutLink')}</NavLink>
                </motion.li>
                <motion.li
                  initial={{ y: -50 }}
                  animate={{ y: 0, transition: { duration: 1, delay: 0.5 } }}
                >
                  <NavLink to='/furnitures'>
                    {t('Header.FurnitureLink')}
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ y: -50 }}
                  animate={{ y: 0, transition: { duration: 1, delay: 0.75 } }}
                >
                  <NavLink to='/our-work'>{t('Header.OurWorkLink')}</NavLink>
                </motion.li>
                <motion.li
                  initial={{ y: -50 }}
                  animate={{ y: 0, transition: { duration: 1, delay: 1 } }}
                >
                  <NavLink to='/news'>{t('Header.NewsLink')}</NavLink>
                </motion.li>
                <motion.li
                  initial={{ y: -50 }}
                  animate={{ y: 0, transition: { duration: 1, delay: 1.25 } }}
                >
                  <NavLink to='/contact'>{t('Header.ContactLink')}</NavLink>
                  <span>|</span>
                </motion.li>
              </ul>
            </nav>
            <EditLang />
          </div>
        </div>
      </header>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 2.25 } }}
        className='saved-link'
      >
        <Link to='/saved'>
          <img src={SavedIcon} alt='Saved' />
        </Link>
      </motion.div>
      <nav className='mobile-navbar'>
        <motion.ul
          initial={{ y: 80 }}
          animate={{ y: 0, transition: { duration: 1, delay: 0.5 } }}
          className='w-100 d-flex align-items-center justify-content-between'
        >
          <li>
            <NavLink to='/'>{t('Header.AboutLink')}</NavLink>
          </li>
          <li>
            <NavLink to='/furnitures'>{t('Header.FurnitureLink')}</NavLink>
          </li>
          <li>
            <NavLink to='/our-work'>{t('Header.OurWorkLink')}</NavLink>
          </li>
          <li>
            <NavLink to='/news'>{t('Header.NewsLink')}</NavLink>
          </li>
        </motion.ul>
      </nav>
    </>
  );
};
