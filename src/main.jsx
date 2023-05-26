import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Amplify } from 'aws-amplify';

import { AuthProvider } from "./contexts/Auth";

import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
