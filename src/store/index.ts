import { create } from 'zustand';

type ItemsPerPage = {
  limit: number;
  setLimit: (limit: number) => void;
};

export const useItemsPerPage = create<ItemsPerPage>((set) => ({
  limit: 5,
  setLimit: (limit: number) => set({ limit }),
}));