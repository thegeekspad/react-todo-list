import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="favicon.png" alt="Logo" className="h-8 w-8 mr-2" />
      </div>

      <h1 className="text-2xl font-semibold text-yellow-200">React Todo App</h1>

      <div className="flex items-center space-x-4">
        <a href="/about" className="text-white hover:underline">
          About
        </a>
        <a href="/contact" className="text-white hover:underline">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
