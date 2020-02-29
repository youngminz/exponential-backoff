import React from "react";
import classNames from "classnames/bind";

import styles from "./Result.module.scss";
const cx = classNames.bind(styles);

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
    <div className={cx("Result")}>
      <table>
        <thead>{header}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};

export default Result;
