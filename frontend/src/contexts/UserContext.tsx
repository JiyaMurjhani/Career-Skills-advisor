import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  name: string;
  education: string;
  skills: string[];
  interests: string[];
  selectedCareer?: string;
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  updateUserData: (updates: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const updateUserData = (updates: Partial<UserData>) => {
    setUserData(prev => prev ? { ...prev, ...updates } : { ...updates } as UserData);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

