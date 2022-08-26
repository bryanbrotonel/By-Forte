import React from 'react';

function CheckoutItem() {
  return (
    <div className="flex gap-6 justify-evenly">
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2'"
          alt=""
          className="aspect-square w-32"
        />
      </div>
      <div className="mb-4 text-sm">
        <h1 className="uppercase font-semibold mb-2">
          Product Name
        </h1>
        <p>Black / L</p>
        <p>Quantity: 2</p>
        <div className="mt-2">
          <p>Total: CAD$100</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
