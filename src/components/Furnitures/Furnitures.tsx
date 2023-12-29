import './furnitures.scss';
import { furnitures } from '../../db/furnitures';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Coords {
  x: number;
  y: number;
}

export const Furnitures = () => {
  return (
    <section className='furnitures' id='furnitures'>
      <div className='container'>
        <div className='furnitures__inner'>
          <h2>Shop Popular Furnitures</h2>

          <ul className='furnitures__products d-flex align-items-center justify-content-center mt-5 flex-wrap gap-4'>
            {furnitures.map((item) => (
              <li>
                <div>
                  <img src={item.img_link} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <Link className='furnitures__btn' to='/furniture'>
            See All
          </Link>
        </div>
      </div>
    </section>
  );
};
