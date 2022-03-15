import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { useState } from 'react';


function App() {

const [theme, setTheme] = useState(light);
const toggleTheme = () => {
  setTheme(theme.)
};

  return (
    <ThemeProvider theme={light}>
        <BrowserRouter>
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" exact component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />

              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
