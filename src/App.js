import { useState } from 'react';

import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddItem from './components/addItem/AddItem';
import SearchItem from './components/searchItem/SearchItem';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newItem === '') return;
    const updatedItems = [
      ...items,
      { id: items.length + 1, name: newItem, completed: false },
    ];
    setAndSaveItems(updatedItems);
    setNewItem('');
  };

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setAndSaveItems(updatedItems);
  };

  const handleEdit = (id) => {
    console.log('Edit item with id: ', id);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setAndSaveItems(updatedItems);
  };

  const setAndSaveItems = (items) => {
    setItems(items);
    localStorage.setItem('items', JSON.stringify(items));
  };

  return (
    <div>
      <Header title="React Todo List" />
      <div className="bg-slate-50 p-6 rounded-lg shadow-md m-5">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleAdd={handleAdd}
        />
      </div>
      <div className="bg-slate-50 p-6 rounded-lg shadow-md m-5">
        <SearchItem search={search} setSearch={setSearch} />
      </div>
      <div className="bg-slate-50 p-6 rounded-lg shadow-md m-5">
        <Content
          items={items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
