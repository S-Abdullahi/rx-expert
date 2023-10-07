"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import axios from "axios";
import Image from "next/image";

type appContextType = {
  menuToggle: () => void;
  isOpen: boolean;
};

const appDefaultValue: appContextType = {
  menuToggle: () => {},
  isOpen: false,
};
const appContext = createContext<appContextType>(appDefaultValue);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const value = {
    menuToggle,
    isOpen,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
  return useContext(appContext);
};
