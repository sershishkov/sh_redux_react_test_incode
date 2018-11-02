import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import redusers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const App = () => {
  return(
    <Provider store={createStoreWithMiddleware(redusers)}>
    
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
