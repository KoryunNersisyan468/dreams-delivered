import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom/client';
import { store } from './Store';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render( 
<Provider store={store}>
<Router>
  <App />
</Router>
</Provider>
);