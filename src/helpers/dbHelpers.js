import firebase from "firebase/app";
import 'firebase/database';

export function getProductInfo(name, variation) {
  return new Promise(function(resolve, reject) {
    var productRef = firebase
      .database()
      .ref("inventory/" + name.toLowerCase() + " - " + variation.toLowerCase());
    productRef.on("value", function(snapshot) {
      const productInfo = snapshot.val();
      return productInfo ? resolve(productInfo) : reject();
    });
  });
}
