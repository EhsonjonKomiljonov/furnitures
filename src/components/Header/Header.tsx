import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './header.scss';
import { EditLang } from '../EditLang/EditLang';

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
            <Link className='logo' to='/'>
              furniture
            </Link>
            <nav className='nav'>
              <ul className='w-100 d-flex align-items-center justify-content-between'>
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
                <li>
                  <NavLink to='/contact'>
                    {t('Header.ContactLink')}
                    <span>|</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
            <EditLang />
          </div>
        </div>
      </header>
      <nav className='mobile-navbar'>
        <ul className='w-100 d-flex align-items-center justify-content-between'>
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
        </ul>
      </nav>
    </>
  );
};
