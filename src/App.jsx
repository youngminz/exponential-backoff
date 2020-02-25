import React, { useState, useEffect } from "react";
import "./App.css";

const calculateBackoff = (
  minRetryBackoff,
  maxRetryBackoff,
  totalRetryCount
) => {
  let result = [];

  for (let retryCount = 1; retryCount <= totalRetryCount; retryCount++) {
    result.push({
      retryCount: retryCount,
      seconds: Math.min(
        minRetryBackoff * 2 ** (retryCount - 1),
        maxRetryBackoff
      )
    });
  }

  return result;
};

const App = () => {
  const [minRetryBackoff, setMinRetryBackoff] = useState(0.1);
  const [maxRetryBackoff, setMaxRetryBackoff] = useState(60.0);
  const [totalRetryCount, setTotalRetryCount] = useState(15);

  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(
      calculateBackoff(
        parseFloat(minRetryBackoff),
        parseFloat(maxRetryBackoff),
        parseInt(totalRetryCount)
      )
    );
  }, [minRetryBackoff, maxRetryBackoff, totalRetryCount]);

  return (
    <>
      <h1>Exponential Backoff Calculator</h1>
      <h2>Parameter</h2>
      <div id="parameter">
        <input
          type="text"
          value={minRetryBackoff}
          placeholder="{min retry backoff}"
          onChange={e => setMinRetryBackoff(e.target.value)}
        />
        <input
          type="text"
          value={maxRetryBackoff}
          placeholder="{max retry backoff}"
          onChange={e => setMaxRetryBackoff(e.target.value)}
        />
        <input
          type="text"
          value={totalRetryCount}
          placeholder="{total retry count}"
          onChange={e => setTotalRetryCount(e.target.value)}
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
