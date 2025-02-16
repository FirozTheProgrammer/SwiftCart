"use client";

import { createContext, useContext } from "react";

const headerContex = createContext(null);

const HeaderContex = ({ value, children }) => {
  return (
    <headerContex.Provider value={value}>{children}</headerContex.Provider>
  );
};

export const useHeaderContex = () => {
  const value = useContext(headerContex);
  return value;
};
export default HeaderContex;
