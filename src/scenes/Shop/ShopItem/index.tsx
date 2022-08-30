import React from 'react';
import { Link } from 'react-router-dom';
import { ShopItem } from '../../../types';

function ShopItem(props: { product: ShopItem, slug: string }) {
  const { product, slug } = props;
  const { name, price, images } = product;

  return (
    <div className="flex justify-center">
      <Link to={slug}>
        <div>
          <img
            src={images[0]}
            alt="Product Image"
            className="aspect-square max-h-64 object-cover"
            loading="lazy"
          />
          <div className="text-center mt-2">
            <p className="font-semibold uppercase">{name}</p>
            <p className="text-sm">{`$${price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShopItem;
