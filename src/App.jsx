import React, { useState } from "react";
import "./App.css";

const calculateBackoff = (interval, retryAttempt, backoffRate) => {
  let result = [];
  let start = interval;

  for (let i = 1; i <= retryAttempt; i++) {
    result.push({ retryCount: i, seconds: start });
    start = start * backoffRate + interval;
  }

  return result;
};

const App = () => {
  const [interval, setInterval_] = useState("2");
  const [retryAttempt, setRetryAttempt] = useState("8");
  const [backoffRate, setBackoffRate] = useState("2");

  return (
    <>
      <h1>Exponential Backoff Calculator</h1>
      <h2>Parameter</h2>
      <div id="parameter">
        <input
          type="text"
          value={interval}
          placeholder="Interval (seconds)"
          onChange={e => setInterval_(parseFloat(e.target.value))}
        />
        <input
          type="text"
          value={retryAttempt}
          placeholder="Retry attempt"
          onChange={e => setRetryAttempt(parseFloat(e.target.value))}
        />
        <input
          type="text"
          value={backoffRate}
          placeholder="Backoff rate"
          onChange={e => setBackoffRate(parseFloat(e.target.value))}
        />
      </div>
      <h2>Result</h2>
      {calculateBackoff(interval, retryAttempt, backoffRate).map(
        ({ retryCount, seconds }) => {
          return <div>{`${retryCount} / ${seconds} sec`}</div>;
        }
      )}
    </>
  );
};

export default App;
