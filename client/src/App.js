import React, { createContext, useReducer } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UpdatePage from './components/UpdatePage';
import HomePage from './components/HomePage';
import { reducer, initialState } from './reducers/updateReducer';
export const GeneralContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route path='/update'>
        <UpdatePage />
      </Route>
      <Route path='/' exact>
        <HomePage />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App' style={{ width: '800px', marginInline: 'auto' }}>
      <GeneralContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing></Routing>
        </BrowserRouter>
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
