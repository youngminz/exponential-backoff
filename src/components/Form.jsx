import React from "react";
import "./Form.scss";

const Form = ({
  minRetryBackoffSeconds,
  setMinRetryBackoffSeconds,
  maxRetryBackoffSeconds,
  setMaxRetryBackoffSeconds,
  totalRetryCount,
  setTotalRetryCount
}) => {
  return (
    <div className="parameter">
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
  );
};

export default Form;
