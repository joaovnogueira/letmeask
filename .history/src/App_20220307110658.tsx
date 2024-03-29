import firebase from 'firebase/compat/app';
import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { auth } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
   const unssubscribe = auth.onAuthStateChanged(user => {
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

    return () => {
      unssubscribe();
    }
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
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
     </BrowserRouter>
  );
}

export default App;
