import firebase from 'firebase/compat/app';
import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { auth } from './services/firebase';

type AuthContextType = {
  user: object,
  signInWithGoogle: () => 
}

export const AuthContext = createContext({} as any);


function App() {
  const [user, setUser] = useState()

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
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
    })
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