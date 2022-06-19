import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </HistoryRouter>
);
