import React from 'react';
import ItemList from '../itemList/ItemList';

const Content = ({ items, handleCheck, handleEdit, handleDelete }) => {
  return (
    <main className="rounded">
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
