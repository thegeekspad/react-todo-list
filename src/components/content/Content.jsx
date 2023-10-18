import React from 'react';
import ItemList from '../itemlist/ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="flex justify-center items-center m-5">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>There are no items</p>
      )}
    </main>
  );
};

export default Content;
