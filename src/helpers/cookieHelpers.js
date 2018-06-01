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

export function removeCart() {
  cookies.remove("My Cart", { path: "/" });
}
