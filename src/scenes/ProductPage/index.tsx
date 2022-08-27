import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  updateItemQuantity,
  selectCartItems,
  addToCart,
} from '../../app/cartSlice';
import ImageSlider from '../../components/ImageSlider';
import { TypeShopItem } from '../../types';
import _ from 'lodash';

function ProductPage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const sizes = ['S', 'M', 'L', 'XL'];

  const [productSize, setProductSize] = useState(sizes[0]);
  const cartItems = useAppSelector(selectCartItems);

  const imagesArray = [
    'https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2',
    'https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2',
  ];

  const currentProduct = {
    id: 1,
    name: 'Product Name',
    variant: 'Black',
    size: productSize as TypeShopItem['size'],
    price: 100,
    image:
      'https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2',
  };

  const onAddToCartHandler = () => {
    // Check if item is already in cart
    const itemIndex = cartItems.findIndex((cartItem) => {
      return _.isEqual(cartItem.item, currentProduct);
    });

    // If item is already in cart, update quantity
    if (itemIndex !== -1) {
      dispatch(
        updateItemQuantity([currentProduct, cartItems[itemIndex].quantity + 1])
      );
    }
    // If item is not in cart, add new item to cart
    else {
      const newCartItem = {
        id: cartItems.length + 1, // TODO: generate unique id
        item: currentProduct,
        quantity: 1,
      };

      dispatch(addToCart(newCartItem));
    }
  };

  // Generate size options based on product
  let sizesList = sizes.map((size) => (
    <button
      key={size}
      value={size}
      onClick={() => setProductSize(size)}
      className={`text-xs font-semibold uppercase p-1 w-10 ${
        size == productSize
          ? 'bg-black text-white'
          : 'bg-white text-black border border-gray-400 hover:bg-black hover:text-white hover:border-none'
      }`}
    >
      {size}
    </button>
  ));

  // Generate image slider based on product
  let productImages = imagesArray.map((image, key) => (
    <img
      key={key}
      src={image}
      alt="Product Image"
      className="h-96 aspect-square lg:aspect-auto object-cover"
      loading="lazy"
    />
  ));

  return (
    <div className="container px-4 py-24">
      <div className="relative flex flex-col md:flex-row justify-center gap-8">
        <div className="hidden md:block basis-1/2 lg:basis-auto space-y-4">
          {productImages}
        </div>
        <ImageSlider images={imagesArray} />
        <div className="sticky md:h-full md:top-80">
          <div className="space-y-6">
            <div>
              <span className="font-bold uppercase text-sm">Collection</span>
              <h1 className="text-4xl font-semibold">Product Name</h1>
            </div>
            <div>
              <span className="font-light">$100</span>
            </div>
            <div className="text-sm">
              <h2 className="uppercase font-semibold">Product Details</h2>
              <ul className="list-disc ml-4">
                <li>Product Description</li>
                <li>In the shape of</li>
                <li>Point form</li>
              </ul>
            </div>
            <div className="space-x-3">{sizesList}</div>
            <div>
              <button
                onClick={onAddToCartHandler}
                className="w-full bg-black hover:bg-black/80 text-white uppercase py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
