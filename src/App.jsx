import React, { useState, useEffect } from "react";
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

  const [result, setResult] = useState([]);

  const validation = () => {
    if (isNaN(parseFloat(interval))) {
      return false;
    }

    if (isNaN(parseInt(retryAttempt))) {
      return false;
    }

    if (isNaN(parseFloat(backoffRate))) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    const validatedParams = validation();

    // TODO: 반환 값을 두 개의 파라미터로 나누기
    if (!validatedParams) {
      return;
    }

    setResult(
      calculateBackoff(
        parseFloat(interval),
        parseInt(retryAttempt),
        parseFloat(backoffRate)
      )
    );
  }, [interval, retryAttempt, backoffRate]);

  return (
    <>
      <h1>Exponential Backoff Calculator</h1>
      <h2>Parameter</h2>
      <div id="parameter">
        <input
          type="text"
          value={interval}
          placeholder="Interval (seconds)"
          onChange={e => setInterval_(e.target.value)}
        />
        <input
          type="text"
          value={retryAttempt}
          placeholder="Retry attempt"
          onChange={e => setRetryAttempt(e.target.value)}
        />
        <input
          type="text"
          value={backoffRate}
          placeholder="Backoff rate"
          onChange={e => setBackoffRate(e.target.value)}
        />
      </div>
      <h2>Result</h2>
      {result.map(({ retryCount, seconds }) => {
        return <div key={retryCount}>{`${retryCount} / ${seconds} sec`}</div>;
      })}
    </>
  );
};

export default App;
