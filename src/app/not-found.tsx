
import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-6">Sorry, this page is coming soon!</h1>
      <ul className="space-y-4">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Go back home
          </a>
        </li>
        <li>
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </li>
        <li>
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ComingSoon;
