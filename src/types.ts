export interface ShopItem {
  id: number;
  name: string;
  variant: string;
  price: number;
  image: string;
  size: 'S' | 'M' | 'L' | 'XL';
}

export type TypeShopItem = ShopItem;
export interface CartItem {
  id: number;
  item: ShopItem;
  quantity: number;
}

export type TypeCartItem = CartItem;

export interface CartState {
  items: CartItem[];
  quantity: number;
  subTotal: number;
  total: number;
}

export type TypeCartState = CartState;