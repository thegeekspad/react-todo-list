import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleAdd }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    handleAdd(e);
  };

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter item description"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
      />

      <select
        name=""
        id=""
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select a category</option>
        <option value="">Work</option>
        <option value="">Personal</option>
        <option value="">Shopping</option>
        <option value="">Others</option>
      </select>

      <button
        className="mt-4 w-full bg-purple-800 text-white font-semibold p-2 rounded hover:bg-blue-600 transition duration-300"
        type="submit"
        onClick={() => inputRef.current.focus()}>
        Add
      </button>
    </form>
  );
};

export default AddItem;
