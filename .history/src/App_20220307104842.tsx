import firebase from 'firebase/compat/app';
import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { auth } from './services/firebase';

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


function App() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
   const auth.onAuthStateChanged(user => {
      if (user) {
        const {displayName,photoURL, uid} = user;

        if(!displayName || !photoURL){
          throw new Error('Missing Information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })
  }, [])

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

  return (
     <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
     </BrowserRouter>
  );
}

export default App;
