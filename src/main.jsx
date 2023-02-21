import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import '@aws-amplify/ui-react/styles.css';

import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

// import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
