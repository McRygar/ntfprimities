import React, { useState } from 'react';

const EmailSignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // In a real app, you would send this to a server
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-lg text-cyan-300">
        Thank you! We'll notify you at launch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
      <div className="flex-grow flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@protocol.xyz"
          className="w-full px-5 py-3 bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
          aria-label="Email address"
        />
        {error && <p className="text-red-400 text-sm mt-2 text-left">{error}</p>}
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition-all duration-300 transform hover:scale-105"
      >
        Notify Me
      </button>
    </form>
  );
};

export default EmailSignupForm;