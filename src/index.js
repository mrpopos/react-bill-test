import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css'
import '@/index.css';
// 导入定制主题
import './theme.css'
import router from '@/router'
import { RouterProvider } from 'react-router-dom';
import store from '@/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
