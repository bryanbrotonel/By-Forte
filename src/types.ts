export interface CartItem {
  id: number;
  name: string;
  variant: string;
  size: "S" | "M" | "L" | "XL";
  price: number;
  quantity: number;
  image: string;
}

export type TypeCartItem = CartItem;

export interface CartState {
  items: CartItem[];
  quantity: number;
  subTotal: number;
  total: number;
}

export type TypeCartState = CartState;