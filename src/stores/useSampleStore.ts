import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

// type
import type { SampleStoreProps } from './type';

const useSanokeStore = create<SampleStoreProps>()(
  devtools(
    immer((set) => ({
      state: '',
      setState: (value) => {
        set((state) => {
          state.isEmotionModalOn = value;
        });
      },
    })),
  ),
);

export default useSanokeStore;
