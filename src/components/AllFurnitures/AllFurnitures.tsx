import { useEffect, useState } from 'react';
import {
  allFurnituresData,
  allFurnituresUzData,
} from '../../db/allFurnituresData';
import { useLangStore } from '../../stores/LangStore';
import './all-furnitures.scss';

export const AllFurnitures = () => {
  const lang = useLangStore((state) => state.lang);
  const [category, setCategory] = useState(
    lang == 'en' ? 'popular' : 'ommabop'
  );

  const handleSetCategory = (text: string) => {
    setCategory(text);
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <section className='all-furnitures'>
      <div className='container'>
        <div className='all-furnitures__inner'>
          <h2 className='text-center mb-4'>Furnitures</h2>
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
          <ul className='d-flex align-items-center justify-content-center flex-wrap all-furnitures__list'>
            {lang == 'en'
              ? allFurnituresData.map((item) => {
                  if (item.category == category) {
                    return (
                      <li>
                        <img src={item.img} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span>{item.price}$</span>
                        </div>
                      </li>
                    );
                  } else if (category == 'popular')
                    return (
                      <li>
                        <img src={item.img} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span>{item.price}$</span>
                        </div>
                      </li>
                    );
                })
              : allFurnituresUzData.map((item) => {
                  if (item.category == category) {
                    console.log(item);
                    return (
                      <li>
                        <img src={item.img} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span>{item.price}$</span>
                        </div>
                      </li>
                    );
                  } else if (category == 'ommabop')
                    return (
                      <li>
                        <img src={item.img} alt={item.title} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span>{item.price}$</span>
                        </div>
                      </li>
                    );
                })}
          </ul>
        </div>
      </div>
    </section>
  );
};
