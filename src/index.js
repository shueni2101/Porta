import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import{I18nextProvider} from "react-i18next";
import i18next from  'i18next';
import global_es from "./Translations/Es/global.json";
import global_en from "./Translations/En/global.json";
const root = ReactDOM.createRoot(document.getElementById('root'));
i18next.init({
  interpolation:{escapeValue: false },
  lng:"en",
  resources:{
    es:{
      global:global_es
    },
    en:{
      global:global_en
    },
  }
});
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Router>
      <App />
    </Router>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
