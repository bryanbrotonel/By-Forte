import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import { useParams } from 'react-router-dom';

import Slider from 'react-slick';

import { setCart, updateCart } from '../../helpers/cookieHelpers';
import { getProductInfo } from '../../helpers/dbHelpers';

import './styles.css';

function ProductInfo() {
  const [product, setProduct] = useState({
    productName: '',
    productVariation: '',
    productImages: [
      'https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png',
    ],
    productPrice: 0,
    productDescription: [],
    itemSize: 'Small',
    itemQuantity: 1,
  });

  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dirtyForm, setDirtyForm] = useState(false);

  // Get specified product
  const { itemName, itemVariation } = useParams();

  useEffect(() => {
    // Retrive initial product information
    getProductInfo(
      itemName.replace(/-/g, ' '),
      itemVariation.replace(/-/g, ' ')
    )
      .then(function (productInfo) {
        const {
          productName,
          productVariation,
          productImages,
          productPrice,
          productDescription,
        } = productInfo;

        const completeProd = {
          ...product,
          productName: productName,
          productVariation: productVariation,
          productImages: productImages,
          productPrice: productPrice,
          productDescription: productDescription,
        };

        setProduct(completeProd);
        setIsLoading(false);

        document.title = 'By Forte | ' + productName + ' - ' + productVariation;
      })
      .catch(function (error) {
        console.log(error);
        setRedirect(true);
      });
  }, []);

  function handleOrderedItemChange({ target: { id, value } }) {
    if (id === 'itemQuantity') {
      value = parseInt(value, 10);

      if (!Number.isInteger(value)) {
        value = String(value);
        setDirtyForm(true);
      } else {
        setDirtyForm(false);
      }
    }

    const updatedItem = {
      ...product,
      [id]: value,
    };

    setProduct(updatedItem);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const cart = updateCart(product);
    setRedirect(true);

    setCart(cart);
  };

  const {
    productName,
    productVariation,
    productImages,
    productPrice,
    productDescription,
    itemSize,
    itemQuantity,
  } = product;

  const productImagesDisplay = productImages.map((image) => {
    return (
      <div key={image} className="mb-3">
        <img
          loading="lazy"
          src={image}
          alt={`${productName} - ${productVariation}`}
        />
      </div>
    );
  });

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            loading="lazy"
            src={productImages[i]}
            alt={`${productName} - ${productVariation}`}
          />
        </a>
      );
    },
    arrows: false,
    dots: productImagesDisplay.length > 1,
    lazyLoad: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (redirect) {
    return <Navigate to="/cart" />;
  }

  return redirect ? (
    <Navigate to="/error" />
  ) : (
    <div className="container">
      {isLoading ? (
        <h1 className="text-muted hv-center mt-5">Loading...</h1>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="alert alert-warning" role="alert">
            For demonstration purposes only. All orders will not be processed.
          </div>
          <div className="product-image col-12 col-md-10 col-lg-5">
            <Slider {...settings}>{productImagesDisplay}</Slider>
          </div>
          <div className="product-info col-lg-6">
            <div>
              <h3 className="font-weight-bold">{productName}</h3>
              <h4 className="text-muted">{productVariation}</h4>
              <h5>
                &#36;
                {productPrice}
              </h5>
              <p className="product-desc">{productDescription}</p>
            </div>
            <form id="productForm" name="productForm" onSubmit={handleSubmit}>
              <div className="input-form">
                <select
                  id="itemSize"
                  name="itemSize"
                  className="uk-select uk-form-width-small"
                  value={itemSize}
                  onChange={handleOrderedItemChange}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
                <input
                  id="itemQuantity"
                  name="itemQuantity"
                  type="number"
                  className="uk-input uk-form-width-small"
                  min="1"
                  value={itemQuantity}
                  onChange={handleOrderedItemChange}
                />
              </div>
              <br />
              <div className="input-form">
                <input
                  disabled={dirtyForm}
                  type="submit"
                  className="uk-button uk-button-default uk-form-width-medium text-center"
                  value="ADD TO CART"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductInfo;
