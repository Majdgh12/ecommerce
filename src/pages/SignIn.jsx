import React, {useState} from 'react';
import amazonLogo from '../assets/Amazon.svg';
import {Link, useNavigate} from 'react-router-dom';
import {FIREBASE_AUTH} from "../firebase/config.js";
import {signInWithEmailAndPassword} from 'firebase/auth';
import arrow_grey from '../assets/arrow-grey.svg';

const SignIn = () => {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!emailOrMobile || !password) {
            setError('Please enter both email/mobile and password.');
            return;
        }

        setLoading(true);
        setError('');

        let firebaseEmail = emailOrMobile;
        if (!emailOrMobile.includes('@')) {
            firebaseEmail = `${emailOrMobile}@test.com`;
        }

        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, firebaseEmail, password);

            console.log('Successfully signed in!');
            navigate('/');

        } catch (err) {
            console.error("Firebase sign-in error:", err.code);
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                setError('Invalid credentials. Please check your email/mobile and password.');
            } else {
                setError('An error occurred during sign-in. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 flex items-center justify-center min-h-screen bg-white">
            <div className="w-full text-black bg-white max-w-[510px] gap-7 ">
                <Link to="/" className="flex justify-center mb-7">
                    <img src={amazonLogo} alt="Amazon Logo" className="h-8"/>
                </Link>

                <div className="px-7 py-9 border border-gray-300 rounded-md">
                    <h2 className="text-4xl font-medium mb-4 text-left font-plex">Sign in</h2>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                             role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSignIn} className="space-y-4 text-left text-xl font-plex font-semibold">
                        <div>
                            <label className="block text-2xl font-plex font-medium mb-3">Email or mobile phone
                                number</label>
                            <input
                                type="text"
                                id="email"
                                value={emailOrMobile}
                                onChange={(e) => setEmailOrMobile(e.target.value)}
                                className="w-full px-3 py-1.5 mt-1 text-xl font-inika border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-amazon-yellow"
                            />
                        </div>

                        <div>
                            <label className="block text-2xl font-plex font-medium mb-3">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-1.5 mt-1 text-sm border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-amazon-yellow"
                            />
                        </div>

                        <div>
                            <button type="submit"
                                    className="w-full py-2 text-xl font-normal font-plex bg-amazon-yellow border border-amazon-yellow rounded-lg hover:bg-yellow-400 mt-1"
                                    disabled={loading}>
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-xl text-left font-plex font-normal">
                        By continuing, you agree to Amazon’s
                        <Link to="/" className="text-amazon-blue hover:underline"> Conditions of Use</Link> and
                        <Link to="/" className="text-amazon-blue hover:underline"> Privacy Notice</Link>.
                    </p>

                    <div className="flex gap-2.5 items-center my-4">
                        <img src={arrow_grey} alt="arrow-grey" className=""/>
                        <Link to="/">
                            <p className="text-amazon-blue hover:underline text-xl font-inika font-normal">Need
                                help?</p>
                        </Link>
                    </div>

                    <div className="w-full h-.5 border-[1px] border-[#D9D9D9] mt-6"></div>

                    <div className="mt-4 text-[24px] text-left ">
                        <p className="mb-2 font-plex font-semibold">Buying for work? <Link to="/signin"
                                                                                           className="text-amazon-blue hover:underline inline-block font-inika font-normal">Shop
                            on Amazon Business</Link></p>
                    </div>

                </div>
                <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-sm font-plex font-normal text-gray-500">New to Amazon?</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div className="w-full mb-4">
                    <Link to="/signup">
                        <button className="w-full py-2 text-xl font-plex font-normal border border-black rounded-lg hover:bg-gray-200">
                            Create your Amazon account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;