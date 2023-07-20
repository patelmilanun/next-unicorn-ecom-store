import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface BaseUrlStore {
  baseUrl: string;
  setBaseUrl: (baseUrl: string) => void;
}

const useBaseUrl = create(
  persist<BaseUrlStore>(
    (set) => ({
      baseUrl: '',
      setBaseUrl: (baseUrl: string) => set({ baseUrl }),
    }),
    {
      name: 'base-url-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useBaseUrl;
