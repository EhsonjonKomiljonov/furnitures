import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { SaveStoreType } from '../types';

export const useSaveSaleStore = create<SaveStoreType>()(
  devtools(
    immer((set) => ({
      savedData: [],
      setSavedData: (savedData) => set(() => ({ savedData })),
    }))
  )
);
