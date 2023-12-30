import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { LangType } from '../types';

export const useLangStore = create<LangType>()(
  devtools(
    immer((set) => ({
      lang: 'en',
      setLang: (lang: string) => set((state) => ({ lang: lang })),
    }))
  )
);
