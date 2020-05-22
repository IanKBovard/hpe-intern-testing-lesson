import React, { useState } from "react";
import "./App.css";

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const fetch = (url) => {
  // this fetched from an api
  if (url === "hello") {
    return ":)";
  } else {
    return ":(";
  }
};
const onClick = (apiCall, urls) => {
  return urls.map((url) => apiCall(url));
};

const App = () => {
  const onSubmit = (count) => {
    console.log(`${count} being delivered to api`);
    return "success!";
  };
  return (
    <div className="App">
      <h1>This is the title</h1>
      <Counter onSubmit={onSubmit} />
    </div>
  );
};

const Counter = ({ onSubmit }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counting is rad!</h1>
      <span data-testid="count">{count}</span>
      <button
        data-testid="increment-button"
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <button
        data-testid="decrement-button"
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
      <button onClick={() => onSubmit(count)}>Submit</button>
    </div>
  );
};

export { App, add, subtract, onClick, Counter };
