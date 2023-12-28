import { create } from "zustand";

type FilterData = {
  limit: number;
  sort: string;
  category: string;
  setLimit: (limit: number) => void;
  setSort: (sort: string) => void;
  setCategory: (category: string) => void;
};

export const useFilterData = create<FilterData>((set) => ({
  limit: 5,
  sort: "asc",
  category: "electronics",
  setLimit: (limit: number) => set({ limit }),
  setSort: (sort: string) => set({ sort }),
  setCategory: (category: string) => set({ category }),
}));
