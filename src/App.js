import React, { useState, useEffect } from "react";

import "./App.css";
import { InputProvider } from "./components/InputContext";
import InputForm from "./components/InputForm";
import Result from "./components/Result";
// import Test from "./components/test";

function App() {
  const [countryCode, setCountryCode] = useState([]);
  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/currencies.json?app_id=b53d08a7b79a44fbbd150bb91d9da615"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(Object.keys(data));
      });
  }, []);
  return (
    <div className="App">
      <div className="app-text">
        <h1>Xchange.io</h1>
        <em>Your Number one currency coverter</em>
      </div>
      <InputProvider>
        <InputForm codes={countryCode} />
        <Result />
      </InputProvider>
    </div>
  );
}

export default App;
