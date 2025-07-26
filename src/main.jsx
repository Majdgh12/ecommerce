import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'; // ✅ تأكدي من الاستيراد هنا

import './firebase/config.js';
import './App.css';

import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';
import Layout from './pages/Layout.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Home from './pages/Home-page.jsx';
import Navbar from './components/Navbar.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/signup',
    element: (
      <Layout>
        <SignUp />
      </Layout>
    ),
  },
  {
    path: '/signin',
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  { path: '/home', element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
