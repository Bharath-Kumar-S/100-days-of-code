import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface UserContextType {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

// Default value
const defaultValue: UserContextType = {
  user: "Bharath",
  setUser: () => {},
};

// Create the context with the default value
export const UserContext = createContext<UserContextType>(defaultValue);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // State to manage the user
  const [user, setUser] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
