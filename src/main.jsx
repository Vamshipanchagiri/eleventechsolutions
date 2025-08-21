import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage'; // updated to match your renamed file
import './index.css'; // relative path to CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
