import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Board from './page/Board';
import Button from './page/button';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route exact path="/board/:id" element={<Board/>}></Route>
      <Route path="/button" element={<Button/>}></Route>
    </Routes>
  </Router>
);

reportWebVitals();
