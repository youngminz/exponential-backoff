import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
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
      <div className="title">exponential backoff calculator</div>

      <Form
        minRetryBackoffSeconds={minRetryBackoffSeconds}
        setMinRetryBackoffSeconds={setMinRetryBackoffSeconds}
        maxRetryBackoffSeconds={maxRetryBackoffSeconds}
        setMaxRetryBackoffSeconds={setMaxRetryBackoffSeconds}
        setTotalRetryCount={setTotalRetryCount}
        totalRetryCount={totalRetryCount}
      />

      <Result calculationResult={calculationResult} />
    </main>
  );
};

export default App;
