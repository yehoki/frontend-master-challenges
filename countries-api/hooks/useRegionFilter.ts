import { create } from 'zustand';

interface RegionFilterProps {
  region: string;
  setRegion: (regionFilter: string) => void;
  removeRegion: () => void;
}

const useRegionFilter = create<RegionFilterProps>((set) => ({
  region: '',
  setRegion: (regionFilter) => set({ region: regionFilter }),
  removeRegion: () => set({ region: '' }),
}));

export default useRegionFilter;
