import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'

function App() {
  return (
     <BrowserRouter>
       <Route path="/" element={<Home />} />
       <Route path="/rooms/new" element={<NewRoom />} />
     </BrowserRouter>
  );
}

export default App;
