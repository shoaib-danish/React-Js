import { useState } from "react";
import "./App.css";

// const array = [1, 2, 3, 4, 5, 1, 2, 3];

//SET method to remove duplicates from an array

const array = [1, 2, 3, 4, 4, 5, 5, 5, 1, 3, 6];
const uniqueArray = [...new Set(array)];

function App() {
  const [selected, setSelected] = useState([]);

  const handleClick = (index) => {
    const newselected = [...selected];

    newselected[index] = !newselected[index];
    setSelected(newselected);
  };

  function handleReset() {
    setSelected([]);
  }
  return (
    <>
      <h1> Vite project</h1>
      <div className="container">
        {uniqueArray.map((_, index) => (
          <div
            key={index}
            className={`box ${selected[index] ? "active" : ""}`}
            onClick={() => handleClick(index)}
            // onclick={() => active (setActive)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleReset}>Reset </button>
    </>
  );
}

export default App;
