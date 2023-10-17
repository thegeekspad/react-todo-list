import React from 'react';

const Header = () => {
  return (
    <header className="bg-tahiti p-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src="logo-32.png" alt="Logo" className="h-8 w-8" />
      </div>

      <h1 className="text-xl font-semibold text-yellow-200">React Todo App</h1>

      <div className="flex items-center space-x-4">
        <a href="/about" className=" hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
