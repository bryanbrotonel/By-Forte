export interface ShopItem {
  id?: number;
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
  images: string[];
  size: string;
}

export type TypeCartProduct = CartProduct;
export interface CartItem {
  id: number;
  item: CartProduct;
  quantity: number;
}

export type TypeCartItem = CartItem;

export interface CartState {
  items: CartItem[];
  quantity: number;
  subTotal: number;
  total: number;
  toggleDrawer: boolean;
}

export type TypeCartState = CartState;