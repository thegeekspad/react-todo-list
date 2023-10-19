import React from 'react';

const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="w-full border-none rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search Items"
        required
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
