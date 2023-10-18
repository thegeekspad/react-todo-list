import React from 'react';
import ItemList from '../itemlist/ItemList';

const Content = ({ items, handleCheck, handleEdit, handleDelete }) => {
  return (
    <main className="flex justify-center items-center m-5">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <p>There are no items</p>
      )}
    </main>
  );
};

export default Content;
