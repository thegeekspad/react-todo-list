import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {year} thegeekspad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
