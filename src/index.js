import App from './App';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import About from './About'
import POPOSList from './POPOSList'
import POPOSDetails from './POPOSDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
);

reportWebVitals();
