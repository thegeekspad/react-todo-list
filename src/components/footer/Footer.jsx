import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-gray-600 p-4 mx-auto text-center text-white">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;
