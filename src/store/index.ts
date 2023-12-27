import { create } from 'zustand';

export const useItemsPerPage = create((set) => ({
  limit: 5,
  setLimit: (limit: number) => set({ limit }),
}));