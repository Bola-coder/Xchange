import React, { useState, useEffect, useContext } from "react";
import "./inputForm.css";
import { InputContext } from "./InputContext";

const InputForm = ({ codes }) => {
  const App_Id = "04298664f7e3411b928609545f9828ce";
  const [amount, setAmount] = useContext(InputContext);
  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    const a = document.getElementById("from");
    const b = document.getElementById("to");
    let fromStr = a.value;
    let toStr = b.value;
    console.log(fromStr);
    console.log(toStr);
    fetch(
      `https://openexchangerates.org/api/convert/${amount}/${fromStr}/${toStr}?app_id=${App_Id}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="form-group">
      <div className="input">
        <label>Enter Amount</label>
        <input type="number" required value={amount} onChange={getAmount} />
      </div>
      <div className="selects">
        <label>From</label>
        <select id="from">
          {codes.map((code) => (
            <option value={code} key={code}>
              {code}
            </option>
          ))}
        </select>
        <label>To</label>
        <select id="to">
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
    </div>
  );
};

export default InputForm;
