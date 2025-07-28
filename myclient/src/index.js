import React from 'react';
import ReactDOM from 'react-dom/client';
//import Add from './Component/Add';
//import Info from './Component/Info';
//import Find from './Component/Find';
//import Delete from './Component/Delete';
//import Update from './Component/Update';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
  

  
);


