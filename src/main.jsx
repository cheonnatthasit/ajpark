import React from 'react';
import * as ReactDOM from "react-dom/client";
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Contact from './routes/Contact';
import Dayroom from './routes/Dayroom'
import Pland from './routes/pland';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Dashboard', element: <Dashboard /> },
  { path: '/Contact', element: <Contact /> },
  { path: '/Dayroom', element: <Dayroom /> },
  { path: '/Contact', element: <Contact /> },
  { path: '/Pland', element: <Pland />},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
