import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import Promise from "redux-promise";
import Thunk from 'redux-thunk'
import reducer from "./Store/reducer";
import Home from "./Component/Home";
const createStoreMiddleware = applyMiddleware(Promise, Thunk)(createStore);
const App = () => {
  return (
    <Provider store={createStoreMiddleware(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
