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

    
   
   async function signInWithGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
   
     const result = await auth.signInWithPopup(provider);
   
       if (result.user){
         const {displayName,photoURL, uid} = result.user;
   
         if(!displayName || !photoURL){
           throw new Error('Missing Information from Google Account.')
         }
   
         setUser({
           id: uid,
           name: displayName,
           avatar: photoURL
         })
       }
     
   }

export function AuthContextProvider(props: AuthContextProviderProps){
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>

    );
}