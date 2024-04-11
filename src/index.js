import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import Index from '../src/component/Index';
import './component/style.css'
import store from './redux/store';
import Loader from '../src/component/loader/Loader';
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter><Index/></BrowserRouter>
      </Provider>
      <Loader/>
      <ToastContainer/>
  </React.StrictMode>
);
reportWebVitals();
