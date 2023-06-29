import { create } from 'zustand';

interface SearchFilterProps {
  search: string;
  setSearch: (searchFilter: string) => void;
}

const useSearchFilter = create<SearchFilterProps>((set) => ({
  search: '',
  setSearch: (searchFilter) => set({ search: searchFilter }),
}));

export default useSearchFilter;
