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

  // Increment quantity
  const onHandleIncrement = () => {
    const newQuantity = itemQuantity + 1;
    updateQuantity(newQuantity);
    setQuantityField(String(newQuantity));
  };

  // Decrement quantity when quantity is greater than 1
  const onHandleDecrement = () => {
    if (itemQuantity >= 1) {
      const newQuantity = itemQuantity - 1;
      updateQuantity(newQuantity);
      setQuantityField(String(newQuantity));
    }
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
        onChange={(e) => setQuantityField(e.target.value)}
        onBlur={(e) => onHandleUpdate(e)}
        className="w-5 text-center focus:outline-none"
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
