import { useState, useEffect } from 'react';

import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AddItem from './components/addItem/AddItem';
import SearchItem from './components/searchItem/SearchItem';
import TodoAPI from './api/TodoAPI';

function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Error while fetching items');
        const items = await response.json();
        setItems(items);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (newItem === '') return;
    const myNewItem = { id: items.length + 1, name: newItem, completed: false };
    const updatedItems = [
      ...items,
      { id: items.length + 1, name: newItem, completed: false },
    ];
    setItems(updatedItems);
    setNewItem('');

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem),
    };

    const result = await TodoAPI(API_URL, options);
    if (result) {
      setFetchError(result);
      setItems(items);
    }
  };

  const handleCheck = async (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);

    const myItem = items.find((item) => item.id === id);
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !myItem.completed }),
    };

    const result = await TodoAPI(`${API_URL}/${id}`, options);
    if (result) {
      setFetchError(result);
      setItems(items);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit item with id: ', id);
  };

  const handleDelete = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    const options = {
      method: 'DELETE',
    };

    const result = await TodoAPI(`${API_URL}/${id}`, options);
    if (result) {
      setFetchError(result);
      setItems(items);
    }
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
      {fetchError && <p>{`${fetchError}`}</p>}
      {isLoading && <p>Loading data...</p>}
      {!fetchError && !isLoading && (
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
      )}

      <Footer />
    </div>
  );
}

export default App;
