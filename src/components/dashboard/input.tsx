import React, { useState } from "react";
import { InputNumber, Button } from "antd";

const App = () => {
  const [number, setNumber] = useState<number>(0);

  const handleChange = (value: number | null) => {
    setNumber(value ? value : 0);
  };

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-5 p-6">
        <button className="bg-orange-400" onClick={handleIncrement}>
          ++++
        </button>
        <InputNumber
          min={0}
          value={number}
          onChange={(value) => handleChange(value)}
        />
        <button className="bg-orange-400" onClick={handleDecrement}>
          ----
        </button>
      </div>
    </div>
  );
};

export default App;
