import React, { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/currencies.json?app_id=b53d08a7b79a44fbbd150bb91d9da615"
    )
      .then((res) => res.json())
      .then((data) => {
        let countryCode = Object.keys(data);
        console.log(countryCode);
      });
  });
  return <div></div>;
};

export default Test;
