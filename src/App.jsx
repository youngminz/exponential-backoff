import React, { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

import "./App.scss";

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
      <h1>truncated exponential backoff simulator</h1>

      <div className="form-wrapper">
        <Input
          type="number"
          label="min retry backoff"
          value={minRetryBackoffSeconds}
          onChange={e => setMinRetryBackoffSeconds(e.target.value)}
          addons="sec"
        />
        <Input
          type="number"
          label="max retry backoff"
          value={maxRetryBackoffSeconds}
          onChange={e => setMaxRetryBackoffSeconds(e.target.value)}
          addons="sec"
        />
        <Input
          type="number"
          label="total retry count"
          value={totalRetryCount}
          onChange={e => setTotalRetryCount(e.target.value)}
          maxLength="3"
          addons="retry"
        />
      </div>

      <Result calculationResult={calculationResult} />
    </main>
  );
};

export default App;
