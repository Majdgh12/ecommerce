import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { FIREBASE_AUTH } from './firebase/config';
import amazonLogo from './assets/Amazon.svg';

function App() {
    const { currentUser } = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
            <img src={amazonLogo} alt="Amazon Logo" className="h-12 mb-8" />

            {currentUser ? (
                <div>
                    <h1 className="text-4xl font-bold">Welcome to Amazon</h1>
                    <p className="mt-4 text-2xl">
                        Hello, {currentUser.name || 'User'}!
                    </p>
                    <p className="text-gray-600">Your email is: {currentUser.email}</p>

                    <button
                        onClick={() => FIREBASE_AUTH.signOut()}
                        className="mt-8 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold">You are not signed in.</h1>
                    <div className="mt-8 space-x-4">
                        <Link to="/signin" className="px-6 py-2 bg-amazon-yellow text-black rounded-lg hover:bg-[#f0c14b]">
                            Sign In
                        </Link>
                        <Link to="/signup" className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300">
                            Create Account
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;