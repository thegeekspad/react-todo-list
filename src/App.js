import { useState } from 'react';

import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn HTML', completed: true },
    { id: 2, name: 'Learn JavaScript', completed: false },
    { id: 3, name: 'Learn CSS', completed: false },
    { id: 4, name: 'Learn React', completed: false },
    { id: 5, name: 'Learn Redux', completed: false },
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);

    // update local storage
    updateLocalStorage(updatedItems);
  };

  const handleEdit = (id) => {
    console.log('Edit item with id: ', id);
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
    <>
      <Header title="React Todo List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Footer />
    </>
  );
}

export default App;
