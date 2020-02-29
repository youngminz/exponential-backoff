import React, { useState } from "react";
import classNames from "classnames/bind";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from "recharts";

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
  const [mode, setMode] = useState("chart");
  const modeTransition = {
    table: "chart",
    chart: "table"
  };

  const toggleButton = (
    <div class={cx("toggle-button")}>
      <button
        onClick={() => {
          setMode(modeTransition[mode]);
        }}
      >
        Toggle to {modeTransition[mode]} view
      </button>
    </div>
  );

  let content;

  if (mode === "chart") {
    content = (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={calculationResult}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="retryCount" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="backoffSeconds" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey="accumulateBackoffSeconds"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
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

    content = (
      <div className={cx("table-wrapper")}>
        <table>
          <thead>{header}</thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={cx("Result")}>
      {toggleButton}
      {content}
    </div>
  );
};

export default Result;
