import React from 'react';
import { createContext, useState } from 'react';

interface ImageColors {
  primary: string;
  secundary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (mainColors: ImageColors) => void;
  setPrevMainColors: (prevMaincolors: ImageColors) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secundary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secundary: 'transparent',
  });

  const setMainColors = (mainColors: ImageColors) => {
    setColors(mainColors);
  };

  const setPrevMainColors = (prevMaincolors: ImageColors) => {
    setPrevColors(prevMaincolors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
