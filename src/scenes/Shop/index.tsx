import _ from 'lodash';
import React, { useEffect } from 'react';
import { fetchFirebase } from '../../api/firebase';
import ShopItem from './ShopItem';

function Shop() {
  const [products, setProducts] = React.useState({});

  useEffect(() => {
    fetchFirebase({ action: 'getData', payload: 'products' }).then((data) => {
      setProducts(data);
    });
  }, []);

  let productRow: React.ReactElement<any>[] = [];

  if (!_.isEmpty(products)) {
    _.forIn(products, (value, key) => {
      productRow.push(
        <ShopItem
          key={key}
          slug={key}
          product={value}
        />
      );
    });
  }

  return (
    <div className="container pt-12">
      <div className="flex flex-wrap gap-8 justify-center">{productRow}</div>
    </div>
  );
}

export default Shop;
