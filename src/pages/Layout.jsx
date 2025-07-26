import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar /> {/* ✅ تمت إضافة النافبار هنا */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
