import React, { useState, useEffect, useContext } from "react";
import "./inputForm.css";
import { InputContext } from "./InputContext";

const InputForm = ({ codes }) => {
  const [amount, setAmount] = useContext(InputContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleFrom = (e) => {
    setFrom(e.target.value);
    console.log(from);
  };

  const handleTo = (e) => {
    setTo(e.target.value);
    console.log(to);
  };

  const convertCurrency = () => {};
  return (
    <div className="form-group">
      <div className="input">
        <label>Enter Amount</label>
        <input type="number" required value={amount} onChange={getAmount} />
      </div>
      <div className="selects">
        <label>From</label>
        <select id="from" onChange={handleFrom}>
          {codes.map((code) => (
            <option value={code} key={code}>
              {code}
            </option>
          ))}
        </select>
        <label>To</label>
        <select name="to" onChange={handleTo}>
          {codes.map((code) => (
            <option value={code} key={code}>
              {code}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" onClick={convertCurrency}>
        Convert
      </button>
      <p>{process.env.API_KEY}</p>
    </div>
  );
};

export default InputForm;
