import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Browser router is needed when using react-router as a library instead of as a framework
import { BrowserRouter } from 'react-router';

// User provider will allow passing user data and functions to manage user data to nested components, prevents prop drilling.
import { UserProvider } from './Contexts/UserContext';
import { SettingsProvider } from './Contexts/SettingsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
