import React from 'react';
import { Link } from 'react-router-dom';

function ShopItem(props: { slug: string; name: string; price: number }) {
  const { slug, name, price } = props;

  return (
    <div className="basis-2/5 md:basis-1/4 flex justify-center">
      <Link to={`${slug}`}>
        <div>
          <img
            src="https://unsplash.com/photos/164_6wVEHfI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHx8fDE2NjEzNjQyNjE&force=true&w=640"
            alt="Product Image"
            className="aspect-square shadow-md max-h-64 object-cover"
            loading="lazy"
          />
          <div className="text-center mt-2">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{`$${price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShopItem;
