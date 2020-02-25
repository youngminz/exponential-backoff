import React, { useState, useEffect } from "react";
import "./App.css";

const calculateExponentialBackoff = (
  minRetryBackoff,
  maxRetryBackoff,
  totalRetryCount
) => {
  let result = [];
  let accumlateBackoffSeconds = 0.0;

  for (let retryCount = 1; retryCount <= totalRetryCount; retryCount++) {
    const backoffSeconds = Math.min(
      minRetryBackoff * 2 ** (retryCount - 1),
      maxRetryBackoff
    );
    accumlateBackoffSeconds += backoffSeconds;

    result.push({
      retryCount,
      backoffSeconds,
      accumlateBackoffSeconds
    });
  }

  return result;
};

const App = () => {
  const [minRetryBackoffSeconds, setMinRetryBackoffSeconds] = useState(0.1);
  const [maxRetryBackoffSeconds, setMaxRetryBackoffSeconds] = useState(60.0);
  const [totalRetryCount, setTotalRetryCount] = useState(15);

  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(
      calculateExponentialBackoff(
        parseFloat(minRetryBackoffSeconds),
        parseFloat(maxRetryBackoffSeconds),
        parseInt(totalRetryCount)
      )
    );
  }, [minRetryBackoffSeconds, maxRetryBackoffSeconds, totalRetryCount]);

  return (
    <>
      <h1>Exponential Backoff Calculator</h1>

      <h2>Parameter</h2>
      <div id="parameter">
        <input
          type="text"
          value={minRetryBackoffSeconds}
          placeholder="min retry backoff seconds"
          onChange={e => setMinRetryBackoffSeconds(e.target.value)}
        />
        <input
          type="text"
          value={maxRetryBackoffSeconds}
          placeholder="max retry backoff seconds"
          onChange={e => setMaxRetryBackoffSeconds(e.target.value)}
        />
        <input
          type="text"
          value={totalRetryCount}
          placeholder="total retry count"
          onChange={e => setTotalRetryCount(e.target.value)}
        />
      </div>

      <h2>Result</h2>
      {result.map(({ retryCount, backoffSeconds, accumlateBackoffSeconds }) => {
        return (
          <div key={retryCount}>{`${retryCount} / ${backoffSeconds.toFixed(
            2
          )} sec / ${accumlateBackoffSeconds.toFixed(2)} sec`}</div>
        );
      })}
    </>
  );
};

export default App;
