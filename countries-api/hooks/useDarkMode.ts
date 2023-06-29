import { create } from 'zustand';

interface DarkMode {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = create<DarkMode>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkMode;
