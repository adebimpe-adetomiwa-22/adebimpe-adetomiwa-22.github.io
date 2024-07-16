import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './assets/font-awesome-pro-main/css/all.min.css';
import NavbarContextProvider from './contexts/NavbarContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <NavbarContextProvider>
        <App />
    </NavbarContextProvider>
);
