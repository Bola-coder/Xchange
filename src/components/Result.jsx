import React from "react";
import "./result.css";

const Result = ({ result }) => {
  return (
    <div className="result">
      {/* {result && result.map((res) => <p>{res.from}</p>)} */}
      <p>
        {result &&
          `${result.amount} ${result.from} = ${result.value.toFixed(2)} ${
            result.to
          }`}
      </p>
    </div>
  );
};

export default Result;
