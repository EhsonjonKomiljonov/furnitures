import { initReactI18next } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import i18n from 'i18next';
import { lang } from './lang/lang';
import { useLangStore } from './stores/LangStore';

function App() {
  const setLang = useLangStore((store) => store.setLang);

  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: lang.en,
      },
      uz: {
        translation: lang.uz,
      },
    },
  });

  setLang(localStorage.getItem('lang') || 'en');

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
