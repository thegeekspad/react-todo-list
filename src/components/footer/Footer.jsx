import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="flex bg-purple-400 p-4 justify-center ">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
