import 'bootstrap/dist/js/bootstrap.js';
import i18next from 'i18next';
import { useLangStore } from '../../stores/LangStore';
import './edit-lang.scss'

export const EditLang = () => {
  const setLang = useLangStore((store) => store.setLang);
  const lang = useLangStore((store) => store.lang);

  const handleEditLang = (language: string) => {
    i18next.changeLanguage(language);
    localStorage.setItem('lang', language);
    setLang(language);
  };

  return (
    <div className='dropdown edit-lang'>
      <button
        className='dropdown-toggle edit-lang__toggle'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {lang}
      </button>
      <ul className='dropdown-menu'>
        <li>
          <button
            onClick={() => handleEditLang('uz')}
            className='dropdown-item'
          >
            Uzbek
          </button>
        </li>
        <li>
          <button
            onClick={() => handleEditLang('en')}
            className='dropdown-item'
          >
            English
          </button>
        </li>
      </ul>
    </div>
  );
};
