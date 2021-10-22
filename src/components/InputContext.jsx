import React, { useState, createContext } from "react";

export const InputContext = createContext();
export const InputProvider = (props) => {
  const [amount, setAmount] = useState(0);

  return (
    <InputContext.Provider value={[amount, setAmount]}>
      {props.children}
    </InputContext.Provider>
  );
};
