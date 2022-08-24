import React from 'react';

function ShopItem() {
  return (
    <div className="basis-2/5 md:basis-1/4 flex justify-center">
      <a href="#">
        <div>
          <img
            src="https://unsplash.com/photos/164_6wVEHfI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHx8fDE2NjEzNjQyNjE&force=true&w=640"
            alt="Product Image"
            className="aspect-square shadow-md max-h-64 object-cover"
            loading="lazy"
          />
          <div className="text-center mt-2">
            <p className="font-semibold">Product name</p>
            <p className="text-sm">$100</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ShopItem;
