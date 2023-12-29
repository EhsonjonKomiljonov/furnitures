import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

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
                  <NavLink to='/'>About Us</NavLink>
                </li>
                <li>
                  <NavLink to='/furniture'>Furnitures</NavLink>
                </li>
                <li>
                  <NavLink to='/our-work'>Our Work</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact Us</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <nav className='mobile-navbar'>
        <ul className='w-100 d-flex align-items-center justify-content-between'>
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to='/furniture'>Furnitures</Link>
          </li>
          <li>
            <Link to='/our-work'>Our Work</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
