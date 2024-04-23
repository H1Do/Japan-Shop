import { createContext } from 'react';

export const MainContext = createContext<{
  user: UsStore;
  figure: FgStore;
} | null>(null);
