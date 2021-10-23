import React, { useState, useContext } from "react";
import "./inputForm.css";
import Result from "./Result";
import { InputContext } from "./InputContext";

const InputForm = ({ codes }) => {
  //   const App_Id = "04298664f7e3411b928609545f9828ce";  openEchange Api
  // const url = `http://openexchangerates.org/api/convert/${amount}/${fromStr}/${toStr}?app_id=${App_Id}`
  const API_KEY = "ef29690a90a1ed369a862e998d43104c";
  const [amount, setAmount] = useContext(InputContext);
  const [result, setResult] = useState(null);
  const getAmount = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    const a = document.getElementById("from");
    const b = document.getElementById("to");
    let fromStr = a.value;
    let toStr = b.value;
    const url = `https://api.currencyscoop.com/v1/convert?api_key=${API_KEY}&from=${fromStr}&to=${toStr}&amount=${amount}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.response);
        setAmount(0);
      });
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
      {result && <Result result={result} />}
    </div>
  );
};

export default InputForm;
