"use client"

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for the context value
interface StringContextType {
  stringValue: string;
  setStringValue: Dispatch<SetStateAction<string>>;
}

// Create the StringContext with the specified type
export const StringContext = createContext<StringContextType | undefined>(undefined);

// Custom hook to access and update the string value
export const useString = (): StringContextType => {
  const context = useContext(StringContext);
  if (context === undefined) {
    throw new Error('useString must be used within a StringProvider');
  }
  return context;
};

// StringProvider component to wrap around your components
interface StringProviderProps {
  children: ReactNode;
}

export const StringProvider: React.FC<StringProviderProps> = ({ children }) => {
  const [stringValue, setStringValue] = useState<string>('');

  // Specify the context value with the correct types
  const value: StringContextType = {
    stringValue,
    setStringValue,
  };

  return (
    <StringContext.Provider value={value}>
      {children}
    </StringContext.Provider>
  );
};

export default StringProvider;
