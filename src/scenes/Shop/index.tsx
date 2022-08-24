import React from 'react';
import ShopItem from './ShopItem';

function Shop() {
  let productRow = [];

  for (let i = 0; i < 10; i++) {
    productRow.push(<ShopItem key={i} />);
  }
  return (
    <div className="container pt-12">
      <div className="flex flex-wrap gap-8 justify-center">{productRow}</div>
    </div>
  );
}

export default Shop;
