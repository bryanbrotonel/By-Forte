import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function QuantityField(props: {
  itemQuantity: number;
  updateQuantity: Function;
}) {
  const { itemQuantity, updateQuantity } = props;

  const [quantityField, setQuantityField] = React.useState(
    String(itemQuantity)
  );

  // Update quantityField state when itemQuantity changes
  const onHandleIncrement = () => {
    const newQuantity = itemQuantity + 1;
    updateQuantity(newQuantity);
    setQuantityField(String(newQuantity));
  };

  // Update quantityField state when itemQuantity changes
  const onHandleDecrement = () => {
    if (itemQuantity >= 1) {
      const newQuantity = itemQuantity - 1;
      updateQuantity(newQuantity);
      setQuantityField(String(newQuantity));
    }
  };

  // Update itemQuantity state when quantityField changes
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityField(e.target.value);
  };

  // Update cart when input out of focus
  const onHandleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    // If input is empty, set quantity to 1
    if (e.target.value === '') {
      updateQuantity(1);
      setQuantityField('1');
    }
    // Process input as desired quantity
    else {
      const value = parseInt(e.target.value);

      //  If value is a number and positive integer, update cart
      if (!Number.isNaN(value) && value >= 0) {
        updateQuantity(value);
        setQuantityField(e.target.value);
      } else {
        // Reset input to previous value
        setQuantityField(String(itemQuantity));
      }
    }
  };

  return (
    <div className="flex gap-2">
      <div>
        <button className="h-full" onClick={onHandleDecrement}>
          <AiOutlineMinus />
        </button>
      </div>
      <input
        type="text"
        pattern="\d*" // Only allow numbers
        value={quantityField}
        onChange={(e) => onHandleChange(e)}
        onBlur={(e) => onHandleUpdate(e)}
        className="w-10 text-center focus:outline-none"
      />
      <div>
        <button className="h-full" onClick={onHandleIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default QuantityField;
