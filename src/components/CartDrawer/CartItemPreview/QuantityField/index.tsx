import React, { useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function QuantityField(props: {
  itemQuantity: number;
  updateQuantity: Function;
}) {
  const { itemQuantity, updateQuantity } = props;

  const [quantityField, setQuantityField] = React.useState(
    String(itemQuantity)
  );

  useEffect(() => {
    setQuantityField(String(itemQuantity));
  }, [itemQuantity]);

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
  const onHandleUpdate = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const inputValue = quantityField;

    // If input is empty, set quantity to 1
    if (inputValue === '') {
      updateQuantity(1);
      setQuantityField('1');
    }
    // Process input as desired quantity
    else {
      const value = parseInt(inputValue);

      //  If value is a number and positive integer, update cart
      if (!Number.isNaN(value) && value >= 0) {
        updateQuantity(value);
        setQuantityField(inputValue);
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
      <form onSubmit={(e) => onHandleUpdate(e)}>
        <input
          type="text"
          pattern="\d*" // Only allow numbers
          value={quantityField}
          onChange={(e) => setQuantityField(e.target.value)}
          onBlur={(e) => onHandleUpdate(e)}
          className="w-10 text-center focus:outline-none"
        />
      </form>
      <div>
        <button className="h-full" onClick={onHandleIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default QuantityField;
