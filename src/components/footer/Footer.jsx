import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="bg-tahiti p-4 mx-auto text-center">
      <p>Copyright &copy; {year} thegeekspad. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
