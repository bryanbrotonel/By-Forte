import Cookies from "universal-cookie";

const cookies = new Cookies();

export function getCart() {
  return cookies.get("My Cart");
}


export function removeCart() {
  cookies.remove("My Cart", { path: "/" });
}
