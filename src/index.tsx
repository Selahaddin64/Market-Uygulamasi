/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux';
import './index.css';
import './module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { FilterProvider } from './FilterContext/filter_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <FilterProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </FilterProvider>
    </Provider>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
