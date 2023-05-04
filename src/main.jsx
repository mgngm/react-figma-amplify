import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Amplify } from 'aws-amplify';

import "@aws-amplify/ui-react/styles.css";

import { AuthProvider } from "./contexts/Auth";

import awsConfig from "./aws-exports";

Amplify.configure({
  ...awsConfig, oauth: {

  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
