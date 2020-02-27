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

const getQueryStringValue = key => {
  const url = new URL(window.location);
  const params = new URLSearchParams(url.search);
  return params.get(key);
};

const App = () => {
  const [minRetryBackoffSeconds, setMinRetryBackoffSeconds] = useState(
    getQueryStringValue("min") || 0.1
  );
  const [maxRetryBackoffSeconds, setMaxRetryBackoffSeconds] = useState(
    getQueryStringValue("max") || 60.0
  );
  const [totalRetryCount, setTotalRetryCount] = useState(
    getQueryStringValue("retry") || 15
  );

  let calculationResult = null;

  if (
    isNaN(parseFloat(minRetryBackoffSeconds)) ||
    isNaN(parseFloat(maxRetryBackoffSeconds)) ||
    isNaN(parseInt(totalRetryCount))
  ) {
    calculationResult = [];
  } else {
    calculationResult = calculateExponentialBackoff(
      parseFloat(minRetryBackoffSeconds),
      parseFloat(maxRetryBackoffSeconds),
      parseInt(totalRetryCount)
    );

    if (window.history.replaceState) {
      const newUrl =
        new URL(window.location).origin +
        `?min=${minRetryBackoffSeconds}&max=${maxRetryBackoffSeconds}&retry=${totalRetryCount}`;

      window.history.replaceState({ path: newUrl }, "", newUrl);
    }
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
