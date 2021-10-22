import React, { useContext } from "react";
import "./inputForm.css";
import { InputContext } from "./InputContext";

const InputForm = () => {
  const [amount, setAmount] = useContext(InputContext);
  const getAmount = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="form-group">
      <div className="input">
        <label>Enter Amount</label>
        <input type="number" required value={amount} onChange={getAmount} />
      </div>
      <div className="selects">
        <label>From</label>
        <select name="from" className="from">
          <option value="usd">USD</option>
          <option value="ngr">NGR</option>
          <option value="eur">EUR</option>
        </select>
        <label>To</label>
        <select name="to" className="to">
          <option value="usd">USD</option>
          <option value="ngr">NGR</option>
          <option value="eur">EUR</option>
        </select>
      </div>
      <p>{amount}</p>
    </div>
  );
};

export default InputForm;
