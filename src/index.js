import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {HeaderNav, PageHome, PageContent, PageContact, PageSubContent, Footer} from './components'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  
  <Router>
    <HeaderNav/>
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/content">
        <Route path="" element={<PageContent/>}/>
        <Route path=":postSlug" element={<PageSubContent />} />
      </Route>
      <Route path="/contact" element={<PageContact/>}/>
    </Routes>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
