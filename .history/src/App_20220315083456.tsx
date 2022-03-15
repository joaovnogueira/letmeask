import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import { AuthContextProvider } from './contexts/AuthContext'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { useState } from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import usePersistedState from './utils/usePersistedState'



function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={light}>
        <BrowserRouter>
            <AuthContextProvider>
              <Switch>
              <GlobalStyle />
        <Header toggleTheme={toggleTheme} />

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
