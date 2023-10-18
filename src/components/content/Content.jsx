import React from 'react';
import ItemList from '../itemList/ItemList';
import AddItem from '../addItem/AddItem';

const Content = ({
  items,
  handleAdd,
  handleCheck,
  handleEdit,
  handleDelete,
}) => {
  return (
    <main className="flex flex-col md:flex-row justify-center items-start m-5 space-x-5 outline outline-blue-50 rounded">
      <div className="bg-slate-50 p-6 rounded-lg shadow-md m-5">
        <AddItem handleAdd={handleAdd} />
      </div>
      <div className="bg-slate-50 p-6 rounded-lg shadow-md m-5">
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
      </div>
    </main>
  );
};

export default Content;
