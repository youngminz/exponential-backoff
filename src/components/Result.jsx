import React from "react";

const Result = ({ calculationResult }) => {
  return calculationResult.map(
    ({ retryCount, backoffSeconds, accumlateBackoffSeconds }) => {
      return (
        <div key={retryCount}>{`${retryCount} / ${backoffSeconds.toFixed(
          2
        )} sec / ${accumlateBackoffSeconds.toFixed(2)} sec`}</div>
      );
    }
  );
};

export default Result;
