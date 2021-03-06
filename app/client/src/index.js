import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import SuperheroStore from './store/SuperheroStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{ user: new UserStore(), superhero: new SuperheroStore() }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
