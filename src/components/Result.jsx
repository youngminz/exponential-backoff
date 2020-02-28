import React from "react";

import "./Result.scss";

const formatTime = seconds => {
  if (seconds >= 60) {
    return `${parseInt(seconds / 60)} min ${parseInt(seconds % 60)} sec`;
  } else if (seconds >= 10) {
    return `${parseInt(seconds % 60)} sec`;
  }
  return `${(seconds % 60).toFixed(2)} sec`;
};

const Result = ({ calculationResult }) => {
  const header = (
    <tr>
      <th>retry #</th>
      <th>current backoff</th>
      <th>accumulated backoff</th>
    </tr>
  );
  const body = calculationResult.map(
    ({ retryCount, backoffSeconds, accumulateBackoffSeconds }) => {
      return (
        <tr key={retryCount}>
          <td>{retryCount}</td>
          <td>{formatTime(backoffSeconds)}</td>
          <td>{formatTime(accumulateBackoffSeconds)}</td>
        </tr>
      );
    }
  );

  return (
    <table className="Result">
      <thead>{header}</thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Result;
