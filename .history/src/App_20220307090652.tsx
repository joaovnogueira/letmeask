import { createContext } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'

const TextConstext = createContext('');


function App() {
  return (
     <BrowserRouter>
        <TestContext.Provider
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
     </BrowserRouter>
  );
}

export default App;
