import { createContext } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'

const TestContext = createContext('');


function App() {
  return (
     <BrowserRouter>
     
     </BrowserRouter>
  );
}

export default App;
