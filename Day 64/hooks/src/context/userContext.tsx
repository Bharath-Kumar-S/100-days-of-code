import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface User {
  user: {
    name: string | undefined;
    email: string | undefined;
    password: string | undefined;
  };
  setUser: Dispatch<
    SetStateAction<{ name: string; email: string; password: string }>
  >;
}

export const UserContext = createContext<User | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const values = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
