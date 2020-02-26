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
  let accumulateBackoffSeconds = 0.0;

  for (let retryCount = 1; retryCount <= totalRetryCount; retryCount++) {
    const backoffSeconds = Math.min(
      minRetryBackoff * 2 ** (retryCount - 1),
      maxRetryBackoff
    );
    accumulateBackoffSeconds += backoffSeconds;

    result.push({
      retryCount,
      backoffSeconds,
      accumulateBackoffSeconds
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
      <h1>truncated exponential backoff calculator</h1>

      <div className="form-wrapper">
        <Input
          label="Min retry backoff"
          value={minRetryBackoffSeconds}
          onChange={e => setMinRetryBackoffSeconds(e.target.value)}
          addons="seconds"
        />
        <Input
          label="Max retry backoff"
          value={maxRetryBackoffSeconds}
          onChange={e => setMaxRetryBackoffSeconds(e.target.value)}
          addons="seconds"
        />
        <Input
          label="Total retry count"
          value={totalRetryCount}
          onChange={e => setTotalRetryCount(e.target.value)}
          maxLength="3"
          addons="retries"
        />
      </div>

      <Result calculationResult={calculationResult} />
    </main>
  );
};

export default App;
