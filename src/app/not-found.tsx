import React from 'react';
import SkyBeam from './components/ui/tailwind/SkyLight';

const ComingSoon: React.FC = () => {
  return (
    <div className="bg-sky-400 relative min-h-screen flex flex-col justify-center items-center text-center">
      {/* Light Beam Background */}
      <SkyBeam />
      <h1 className="text-4xl font-bold mb-6 z-10">Sorry, this page is coming soon!</h1>
      <ul className="space-y-4 z-10">
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