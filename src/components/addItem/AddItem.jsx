const AddItem = ({ handleAdd }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter item description"
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
        onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

export default AddItem;
