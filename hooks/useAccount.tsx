"use client"
import  { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
    account: string;
    token: string;
    updateToken: (newValue: string) => void;

  updateAccount: (newValue: string) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [account, setAccount] = useState("");
    const [token, setToken] = useState("");

  const updateAccount = (newValue: string) => {
    setAccount(newValue);
  };
  const updateToken = (newValue: string) => {
    setToken(newValue);
  };

  return (
    <MyContext.Provider value={{ account, updateAccount , token , updateToken}}>
      {children}
    </MyContext.Provider>
  );
};

export const useAccount = (): MyContextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('a problem has occured with mycontext');
  }
  return context;
};