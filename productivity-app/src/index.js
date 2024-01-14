import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <GoogleOAuthProvider clientId="949637085686-dl0m34hvsuifhhlpksgveapnt8mdfpeg.apps.googleusercontent.com">
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </GoogleOAuthProvider>
    
  
);
reportWebVitals();
