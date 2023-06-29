import { create } from 'zustand';

interface Countries {
  countries: [];
  setCountries: (countryObject: []) => void;
}

const useCountries = create<Countries>((set) => ({
  countries: [],
  setCountries: (countryObject) => set({ countries: countryObject }),
}));

export default useCountries;
