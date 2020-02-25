import React, { useState, useEffect } from "react";
import "./App.css";
import InputParameter from "./components/InputParameter";
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

  const [calculationResult, setCalculationResult] = useState([]);

  useEffect(() => {
    setCalculationResult(
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

      <InputParameter
        minRetryBackoffSeconds={minRetryBackoffSeconds}
        setMinRetryBackoffSeconds={setMinRetryBackoffSeconds}
        maxRetryBackoffSeconds={maxRetryBackoffSeconds}
        setMaxRetryBackoffSeconds={setMaxRetryBackoffSeconds}
        setTotalRetryCount={setTotalRetryCount}
        totalRetryCount={totalRetryCount}
      />

      <Result calculationResult={calculationResult} />
    </>
  );
};

export default App;
