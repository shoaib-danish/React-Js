import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="pt-2 pb-6 flex shadow-2xl  justify-center">
          <input
            type="search"
            placeholder="Find your place"
            id="default-search"
            className="block w-5/12 pl-5 p-4 shadow-lg shadow-blue-950 hover:shadow-none text-md rounded-lg dark:bg-blue-950  text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="p-2">
            <button
              type="submit"
              className="p-6 shadow-md shadow-slate-950 hover:shadow-none text-white font-medium rounded-lg text-sm px-4 py-3 dark:bg-blue-800 dark:hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
