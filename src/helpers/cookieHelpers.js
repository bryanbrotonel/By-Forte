import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setEnabledCookies() {
  cookies.set("Cookies Enabled", true, { path: "/" });
}

export function getEnabledCookies() {
  return cookies.get("Cookies Enabled");
}

export function getCart() {
  return cookies.get("My Cart");
}

export function setCart(cart) {
  return cookies.set("My Cart", cart, { path: "/" });
}

export function updateCart(state) {
  const previousCart = getCart();
  const currentState = state;

  const orderedItem = {
    productName: currentState.productName,
    productVariation: currentState.productVariation,
    itemSize: currentState.itemSize,
    itemPrice: currentState.productPrice,
    itemQuantity: currentState.itemQuantity
  };

  const currentCart =
    !previousCart || previousCart === undefined || previousCart.length === 0
      ? { total: 0, subtotal: 0, itemCount: 0, items: [] }
      : previousCart;

  const currentCartItems = currentCart.items;

  const duplicateItem =
    currentCartItems.length !== 0
      ? currentCartItems.findIndex(function(currentitem) {
          const orderedItem = currentState;

          return (
            currentitem.itemName === orderedItem.itemName &&
            currentitem.itemSize === orderedItem.itemSize &&
            currentitem.productVariation === orderedItem.productVariation
          );
        })
      : -1;

  const itemQuantity = orderedItem.itemQuantity;

  if (duplicateItem === -1) {
    currentCartItems.push(orderedItem);
  } else {
    currentCartItems[duplicateItem].itemQuantity += itemQuantity;
  }

  currentCart.itemCount += itemQuantity;

  const itemTotal = orderedItem.itemPrice * itemQuantity;

  currentCart.total += itemTotal;
  currentCart.subtotal += itemTotal;

  return currentCart;
}

export function removeCart() {
  cookies.remove("My Cart", { path: "/" });
}
