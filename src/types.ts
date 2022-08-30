export interface CartState {
  items: CartItem[];
  quantity: number;
  subTotal: number;
  total: number;
  toggleDrawer: boolean;
}

export type TypeCartState = CartState;
export interface ShopItem {
  name: string;
  description: string;
  variant: string;
  price: number;
  images: string[];
  sizes: [{ size: string; quantity: number }];
}

export type TypeShopItem = ShopItem;

export interface CartProduct {
  name: string;
  variant: string;
  price: number;
  image: string;
  size: string;
}

export type TypeCartProduct = CartProduct;
export interface CartItem {
  id: string;
  item: CartProduct;
  quantity: number;
}

export type TypeCartItem = CartItem;

export interface CheckoutOrder {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  cart: {
    items: CartItem[];
    quantity: number;
    subTotal: number;
    total: number;
  };
}

export type TypeCheckoutOrder = CheckoutOrder;