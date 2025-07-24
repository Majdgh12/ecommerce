import React from 'react';
import Footer from '../components/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;