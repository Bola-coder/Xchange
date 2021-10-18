import React from "react";
import "./inputForm.css";

const InputForm = () => {
  return (
    <div className="inputs">
      <div className="input">
        <label>Enter Amount</label>
        <input type="number" required />
      </div>
      <div className="selects">
        <label>From</label>
        <select name="from">
          <option value="usd">USD</option>
          <option value="ngr">NGR</option>
          <option value="eur">EUR</option>
        </select>
        <label>To</label>
        <select name="to">
          <option value="usd">USD</option>
          <option value="ngr">NGR</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default InputForm;
