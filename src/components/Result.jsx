import React from "react";
import "./Result.scss";

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
          <td>{backoffSeconds.toFixed(2)} sec</td>
          <td>{accumulateBackoffSeconds.toFixed(2)} sec</td>
        </tr>
      );
    }
  );

  return (
    <table>
      <thead>{header}</thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Result;
