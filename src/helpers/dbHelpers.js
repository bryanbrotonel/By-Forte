import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { getCurrentTimestamp, PadWithZeros } from "./baseHelper";

export function authValidate() {
  return new Promise(function(resolve) {
    firebase.auth().onAuthStateChanged(function(user) {
      return user ? resolve(true) : resolve(false);
    });
  });
}

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

export function getOrderID() {
  return new Promise(function(resolve, reject) {
    firebase
      .database()
      .ref("orderList")
      .once("value")
      .then(function(snapshot) {
        var orderID = snapshot.numChildren();
        orderID = PadWithZeros(++orderID);
        return orderID ? resolve(orderID) : reject();
      });
  });
}

export function formatOrder(formInfo, cart) {
  const currentTimeStamp = getCurrentTimestamp()[0];
  const currentTimeOffset = getCurrentTimestamp()[1];

  return new Promise(function(resolve, reject) {
    getOrderID().then(function(orderID) {
      var order = {
        cart: cart,
        customerInfo: formInfo,
        orderID: orderID,
        time: {
          timeStamp: currentTimeStamp,
          offset: currentTimeOffset
        }
      };
      return order ? resolve(order) : reject();
    });
  });
}

export function getProducts() {
  var inventory = [];

  return new Promise(function(resolve, reject) {
    firebase
      .database()
      .ref("inventory")
      .once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();

          const productItem = {
            productName: childData.productName,
            productVariation: childData.productVariation,
            productImages: childData.productImages
          };

          inventory.push(productItem);
          return inventory ? resolve(inventory) : reject(inventory);
        });
      });
  });
}

export function addOrderToDB(order) {
  const firebaseDB = firebase.database();
  const items = order.cart.items;

  for (let i = 0; i < items.length; i++) {
    let { productName, productVariation, itemSize, itemQuantity } = items[i];
    const dbPath =
      "inventory/" +
      productName.toLowerCase() +
      " - " +
      productVariation.toLowerCase() +
      "/product" +
      itemSize +
      "Quantity";

    updateInventory(dbPath, itemQuantity);
  }

  var orderUpdates = {};
  orderUpdates[
    "orderList/" + firebaseDB.ref("orderList").push().key + "-" + order.orderID
  ] = order;

  firebaseDB.ref().update(orderUpdates);
}

function updateInventory(dbPath, itemQuantity) {
  const firebaseDB = firebase.database();
  var inventoryUpdates = {};

  firebaseDB
    .ref(dbPath)
    .once("value")
    .then(snapshot => {
      var dbValue = snapshot.val();
      inventoryUpdates[dbPath] = dbValue + itemQuantity;
      firebaseDB.ref().update(inventoryUpdates);
    });
}
