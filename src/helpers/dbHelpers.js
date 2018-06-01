import firebase from "firebase";

export function getProductInfo(name, variation) {
  return new Promise(function(resolve, reject) {
    var productRef = firebase
      .database()
      .ref("productList/" + name.toLowerCase() + " - " + variation.toLowerCase());
    productRef.on("value", function(snapshot) {
      const productInfo = snapshot.val();
      return productInfo ? resolve(productInfo) : reject();
    });
  });
}
