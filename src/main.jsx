import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './firebase/config.js';
import './App.css';

import { AuthProvider } from './context/AuthContext.jsx';
import App from './App.jsx';
import Layout from "./pages/Layout.jsx";
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';

import Home from './pages/Home-page.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // HomePage
    },
    {
        path: "/signup",
        element: (
            <Layout>
                <SignUp />
            </Layout>
        ),
    },
    {
        path: "/signin",
        element: (
            <Layout>
                <SignIn />
            </Layout>
        ),
    },
    {
        path: "/home",
        element: <Home/>, // HomePage
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);