import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import amazonLogo from '../assets/Amazon.svg';
import arrowIcon from '../assets/arrow.svg';
import rectangle from '../assets/Rectangle.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebase/config.js";
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const SignUp = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        `${mobile}@test.com`,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(FIREBASE_DB, "users", user.uid), {
        name,
        mobile,
        email: user.email,
        createdAt: serverTimestamp()
      });

      console.log('✅ User registered & data saved!');
      navigate('/home'); // ✅ يذهب مباشرة إلى صفحة Home
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex items-center justify-center min-h-screen bg-white">
      <div className="w-full text-black bg-white max-w-md">
        <Link to="/" className="flex justify-center mb-7">
          <img src={amazonLogo} alt="Amazon Logo" className="h-8" />
        </Link>

        <div className="px-7 py-9 border border-gray-300 rounded-md">
          <h2 className="text-4xl font-medium mb-4">Create Account</h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-4 text-xl font-semibold">
            <div>
              <label className="block text-xl">Your name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-400 rounded-sm focus:ring-2 focus:ring-amazon-yellow"
              />
            </div>

            <div>
              <label className="block text-xl">Mobile number</label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-400 rounded-sm focus:ring-2 focus:ring-amazon-yellow"
              />
            </div>

            <div>
              <label className="block text-xl">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-400 rounded-sm focus:ring-2 focus:ring-amazon-yellow"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-xl bg-amazon-yellow border border-amazon-yellow rounded-lg hover:bg-yellow-400"
            >
              {loading ? 'Verifying...' : 'Verify mobile number'}
            </button>
          </form>

          <div className="w-full border border-gray-300 mt-4"></div>

          <div className="mt-4 text-[24px]">
            <p className="mb-2 font-semibold">
              Buying for work?{' '}
              <Link to="/signup" className="text-amazon-blue hover:underline">
                Create a free business account
              </Link>
            </p>

            <img src={rectangle} alt="Rectangle" className="w-full h-1 my-4" />

            <p className="text-xl">
              Already have an account?{' '}
              <Link to="/signin" className="text-amazon-blue hover:underline">
                Sign in
                <img
                  src={arrowIcon}
                  alt="Arrow Icon"
                  className="inline-block w-2.5 h-2.5 ml-2"
                />
              </Link>
            </p>
          </div>

          <p className="mt-4 text-xl">
            By creating an account, you agree to Amazon’s
            <Link to="/" className="text-amazon-blue hover:underline"> Conditions of Use</Link> and
            <Link to="/" className="text-amazon-blue hover:underline"> Privacy Notice</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
