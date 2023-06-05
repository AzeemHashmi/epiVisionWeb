import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import thunk from 'redux-thunk';
import {ContextProvider} from './contexts/ContextProvider';
import reducers from './reducers';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <ContextProvider>
     <Provider store={store}>

    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </React.StrictMode>
     </Provider>
  </ContextProvider>
);


