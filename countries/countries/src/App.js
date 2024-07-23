import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountries] = useState([]);
  const [input, setInput] = useState("");

  // how to filter Data drom react State and render

  const handleChange = async (e) => {
    setInput(e.target.value);
    const result = await fetch(`https://restcountries.com/v3.1/name/${input}`);
    const data = await result.json();

    setFilteredCountries(data);
  };
  return (
    <>
      <Navbar />

      <form>
        <div className="pt-2 pb-6 flex shadow-2xl  justify-center">
          <input
            type="search"
            placeholder="Find your place"
            id="default-search"
            className="block w-5/12 pl-5 p-4 shadow-lg shadow-blue-950 hover:shadow-none text-md rounded-lg dark:bg-blue-950  text-white"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </form>

      <CountriesLists
        countries={filteredCountry.length > 0 ? filteredCountry : countries}
        setCountries={setCountries}
      />
    </>
  );
}

function CountriesLists({ countries, setCountries }) {
  const fetchCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  // console.log({ countries });

  return (
    <div
      className="p-8 bg-blue-950 grid grid-flow-row gap-8 text-black 
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {countries.map((country) => (
        <Card key={country.name.common} country={country} />
      ))}
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="bg-blue-900 max-w-full h-14">
        <div>
          <ul className=" font-Permanent_Marker text-center text-3xl sm:grid-text uppercase tracking-widest p-3 text-white">
            Explore the world !
          </ul>
        </div>
      </div>
    </>
  );
}

function Card({ country }) {
  return (
    <>
      <div
        className="bg-slate-50 rounded-lg hover:shadow-2xl hover:cursor-pointer
      transform transition duration-300 hover:scale-105 hover:bg-blue-200"
      >
        <img
          src={country.flags.png}
          alt="flag"
          className=" w-full rounded-xl p-3"
        />
        <div className="px-6 py-5 ">
          <div className="font-Lobster text-center text-black text-2xl mb-3">
            {country.name.common}
          </div>

          <div>
            <span className="font-medium mt-5 text-xl text-black">
              <p>
                <span>
                  {" "}
                  <strong>🏛️ Capital</strong>: {country.capital}
                </span>
              </p>
              <p>
                <span>
                  <strong>👨‍👩‍👧‍👦 Population</strong>: {country.population}
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <strong>🗾 Area</strong>: {country.area}
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <strong>🌍 Region</strong>: {country.region}
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const SearchInput = ({ countries }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredData = countries.filter(
      (country) => country.name.common.toLowerCase() === input.toLowerCase()
    );

    console.log({ input }, { filteredData });
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

export default App;
