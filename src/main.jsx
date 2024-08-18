import React from 'react';
import * as ReactDOM from "react-dom/client";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Dashboard', element: <Dashboard /> },
  { path: '/Contact', element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
