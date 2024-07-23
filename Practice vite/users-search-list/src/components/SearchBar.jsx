import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(input);
  };
  return (
    <div className="bg-blue-300 p-8 mt-12 ">
      <div className="flex justify-center">
        <div className="relative">
          <form onSubmit={handleSearch}>
            <input
              className=" text-2xl h-24 w-96 border-4 hover:shadow-none shadow-black shadow-lg border-blue-800 pr-8 pl-5 rounded-xl focus:shadow focus:outline-none"
              type="search"
              placeholder=" Search anything"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
