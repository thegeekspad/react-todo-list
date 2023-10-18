import React from 'react';
import { BsGithub, BsFillInfoCircleFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex justify-between bg-purple-400 p-3">
      <div className="flex items-center space-x-5">
        <img src="logo-32.png" alt="Logo" className="h-6 w-6" />
      </div>
      <div>
        <h1 className="font-semibold ">React Todo List</h1>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/thegeekspad/react-todo-list"
          target="_blank">
          <BsGithub className="h-6 w-6" />
        </a>
        <a href="/about" className=" hover:underline">
          <BsFillInfoCircleFill className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
};

export default Header;
