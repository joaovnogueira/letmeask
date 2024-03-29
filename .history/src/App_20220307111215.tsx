import firebase from 'firebase/compat/app';
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { auth } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext'


function App() {


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
