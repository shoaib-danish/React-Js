import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function Reset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("Augut 17 2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step{step}</span>
      </div>

      <div>
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button>
        <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${count} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <div>
        <button onClick={Reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
