import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/MainFooter.jsx';
import Home from './pages/Home-page.jsx';
import Product from './pages/ProductPage.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import AuthFooter from './components/Footer.jsx';

// Layout-like wrapper directly in App
const AppLayout = () => (
    <>
        <Navbar />
        <main className="min-h-screen">
            <Outlet />
        </main>
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        element: <AppLayout />, // ✅ this replaces the need for Layout.jsx
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/product', element: <Product /> },
        ],
    },
    {
        path: '/signin',
        element: (
            <>
                <SignIn />
                <AuthFooter />
            </>
        ),
    },
    {
        path: '/signup',
        element: (
            <>
                <SignUp />
                <AuthFooter />
            </>
        ),
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
