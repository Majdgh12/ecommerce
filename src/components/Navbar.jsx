import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FIREBASE_AUTH } from "../firebase/config";
import { Menu, ShoppingCart } from "lucide-react";
import amazonLogo from "../assets/Amazon.svg";

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <div className="w-full">
      {/* الصف العلوي */}
      <div className="bg-[#131921] text-white flex items-center justify-between px-4 py-2">
        {/* الشعار */}
        <Link to="/" className="flex items-center">
          <img src={amazonLogo} alt="Amazon" className="h-8" />
        </Link>

        {/* البحث */}
        <div className="flex-1 mx-4 hidden md:flex">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full p-2 rounded-l-md"
          />
          <button className="bg-amazon-yellow px-4 rounded-r-md">🔍</button>
        </div>

        {/* حساب المستخدم */}
        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <span className="text-sm">Hello, {currentUser.name || "User"}</span>
              <button
                onClick={() => FIREBASE_AUTH.signOut()}
                className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-sm hover:underline">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500"
              >
                Register
              </Link>
            </>
          )}

          {/* عربة التسوق */}
          <Link to="/" className="flex items-center gap-1">
            <ShoppingCart size={24} />
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {/* الصف الثاني */}
      <div className="bg-[#232f3e] text-white px-4 py-2 flex items-center gap-6 text-sm overflow-x-auto">
        <div className="flex items-center gap-1 cursor-pointer">
          <Menu size={20} />
          <span>All</span>
        </div>
        <Link to="/" className="hover:underline">
          Amazon mini TV
        </Link>
        <Link to="/" className="hover:underline">
          Best Sellers
        </Link>
        <Link to="/" className="hover:underline">
          Today's Deals
        </Link>
        <Link to="/" className="hover:underline">
          Customer Service
        </Link>
        <Link to="/" className="hover:underline">
          Mobiles
        </Link>
        <Link to="/" className="hover:underline">
          Electronics
        </Link>
        <Link to="/" className="hover:underline">
          Fashion
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
