import React from 'react';

const Content = () => {
  const getRandomName = () => {
    const names = ['John', 'Sam', 'Raj'];
    return names[Math.floor(Math.random() * names.length)];
  };
  return (
    <main>
      <p>{getRandomName()}</p>
    </main>
  );
};

export default Content;
