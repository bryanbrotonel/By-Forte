import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  updateItemQuantity,
  selectCartItems,
  addToCart,
  toggleDrawer,
} from '../../app/cartSlice';
import ImageSlider from '../../components/ImageSlider';
import _ from 'lodash';
import { fetchFirebase } from '../../api/firebase';
import { CartProduct, ShopItem } from '../../types';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ShopWarning from '../../components/ShopWarning';

function ProductPage() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ShopItem>(null);
  const [productSize, setProductSize] = useState(null);

  useEffect(() => {
    fetchFirebase({
      action: 'getData',
      payload: `products/${params.id}`,
    }).then((data) => {
      setProduct(data);
      setProductSize(data.sizes[0].size);
    });
  }, []);

  const cartItems = useAppSelector(selectCartItems);

  // Add or update item in cart, and open cart drawer
  const onAddToCartHandler = () => {
    const cartedProduct = {
      name: product.name,
      price: product.price,
      size: productSize,
      variant: product.variant,
      image: product.images[0],
    } as CartProduct;

    // Check if item is already in cart
    const itemIndex = cartItems.findIndex((cartItem) => {
      return _.isEqual(cartItem.item, cartedProduct);
    });

    console.log(cartItems, cartedProduct, itemIndex);

    // If item is already in cart, update quantity
    if (itemIndex !== -1) {
      dispatch(
        updateItemQuantity([cartedProduct, cartItems[itemIndex].quantity + 1])
      );
    }
    // If item is not in cart, add new item to cart
    else {
      const newCartItem = {
        id: `${params.id}-${productSize}`,
        item: cartedProduct,
        quantity: 1,
      };

      dispatch(addToCart(newCartItem));
    }
    dispatch(toggleDrawer());
  };

  if (_.isEmpty(product)) {
    return null;
  } else {
    const { name, price, images, sizes, description, variant } = product;

    let sizesList: React.ReactElement<any>[] = [];

    _.forEach(sizes, function (value) {
      sizesList.push(
        <button
          key={value.size}
          value={value.size}
          disabled={value.quantity === 0}
          onClick={() => setProductSize(value.size)}
          className={`text-xs font-semibold uppercase p-1 w-10 ${
            value.size == productSize
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-400 hover:bg-black hover:text-white hover:border-none'
          }`}
        >
          {value.size}
        </button>
      );
    });

    // Generate image slider based on product
    let productImages = images.map((image, key) => (
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
          <ImageSlider images={images} />
          <div className="sticky lg:basis-1/4 md:h-full md:top-80">
            <div className="space-y-6">
              <div className="uppercase">
                <h1 className="text-2xl font-semibold mb-2">{name}</h1>
                <h2>{variant}</h2>
              </div>
              <div>
                <span className="font-light">${price}</span>
              </div>
              <div className="text-sm">
                <h2 className="uppercase font-semibold">Product Details</h2>
                <div>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    children={description}
                  />
                </div>
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
        <ShopWarning />
      </div>
    );
  }
}

export default ProductPage;
