import React from 'react';
import { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn HTML', completed: true },
    { id: 2, name: 'Learn JavaScript', completed: false },
    { id: 3, name: 'Learn CSS', completed: false },
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);

    // update local storage
    updateLocalStorage(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    // update local storage
    updateLocalStorage(updatedItems);
  };

  const updateLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <main className="flex justify-center items-center m-5">
      {items.length ? (
        <ul className="list-none w-[500px]">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-5 bg-slate-100 m-2 p-2">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheck(item.id)}
                className="accent-purple-500 h-5 w-5"
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                className="flex-grow hover:font-semibold">
                {item.name}
              </label>
              <button className="hover:text-red-500">
                <BsTrash3
                  onClick={() => handleDelete(item.id)}
                  className="h-5 w-5"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no items</p>
      )}
    </main>
  );
};

export default Content;
