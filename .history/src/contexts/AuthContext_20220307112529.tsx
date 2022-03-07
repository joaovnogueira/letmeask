import firebase from "firebase/compat/app";
import { auth } from "../services/firebase";

import { createContext, ReactNode, useEffect, useState } from "react";


type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

const [user, setUser] = useState<User>()



export function AuthContextProvider(props: AuthContextProviderProps){
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>

    );
}