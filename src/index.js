import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DialProvider from "./context/dialContext";

ReactDOM.render(
  <React.StrictMode>
      <DialProvider>
          <App />
      </DialProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
