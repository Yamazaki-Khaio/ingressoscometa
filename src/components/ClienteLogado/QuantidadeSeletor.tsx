import React, { useState } from "react";

export default function QuantitySelector(props) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);

    // Verifica se o valor é um número válido e não é negativo
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDecrement}
        className="border border-gray-400 rounded-md p-2"
      >
        -
      </button>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleInputChange}
        className="border w-16 border-gray-400 rounded-md p-2 text-center"
        min="0" // Define o valor mínimo como 0
      />
      <button
        onClick={handleIncrement}
        className="border border-gray-400 rounded-md p-2"
      >
        +
      </button>
    </div>
  );
}
