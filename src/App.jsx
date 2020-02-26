import React, { useState } from "react";
import "./App.scss";
import Input from "./components/Input";
import Result from "./components/Result";

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

  let calculationResult = null;

  if (
    Number.isNaN(parseFloat(minRetryBackoffSeconds)) ||
    Number.isNaN(parseFloat(maxRetryBackoffSeconds)) ||
    Number.isNaN(parseInt(totalRetryCount))
  ) {
    calculationResult = [];
  } else {
    calculationResult = calculateExponentialBackoff(
      parseFloat(minRetryBackoffSeconds),
      parseFloat(maxRetryBackoffSeconds),
      parseInt(totalRetryCount)
    );
  }

  return (
    <main className="app">
      <h1>exponential backoff calculator</h1>

      <div className="form-wrapper">
        <Input
          label="Min retry backoff seconds"
          value={minRetryBackoffSeconds}
          placeholder="Min retry backoff seconds"
          onChange={e => setMinRetryBackoffSeconds(e.target.value)}
        />
        <Input
          label="Max retry backoff seconds"
          value={maxRetryBackoffSeconds}
          placeholder="max retry backoff seconds"
          onChange={e => setMaxRetryBackoffSeconds(e.target.value)}
        />
        <Input
          label="Total retry count"
          value={totalRetryCount}
          placeholder="Total retry count"
          onChange={e => setTotalRetryCount(e.target.value)}
          maxLength="3"
        />
      </div>

      <Result calculationResult={calculationResult} />
    </main>
  );
};

export default App;
