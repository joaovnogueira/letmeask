import { createContext } from "react";

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props){
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
        </AuthContext.Provider>

    );
}