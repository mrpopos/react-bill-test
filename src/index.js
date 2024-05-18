import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import router from '@/router'
import { RouterProvider } from 'react-router-dom';

// 导入定制主题
import './theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
