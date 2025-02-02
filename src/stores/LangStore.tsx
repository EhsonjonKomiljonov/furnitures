import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { LangStoreType } from '../types';

export const useLangStore = create<LangStoreType>()(
  devtools(
    immer((set) => ({
      lang: 'en',
      setLang: (lang: string) => set(() => ({ lang })),
    }))
  )
);
