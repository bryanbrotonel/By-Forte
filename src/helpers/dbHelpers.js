import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue, push, update } from 'firebase/database';

import { getCurrentTimestamp, PadWithZeros } from './baseHelper';

export function authValidate() {
  return new Promise(function (resolve) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      return user ? resolve(true) : resolve(false);
    });
  });
}

export function getProductInfo(name, variation) {
  return new Promise(function (resolve, reject) {
    const db = getDatabase();

    var productRef = ref(
      db,
      'inventory/' + name.toLowerCase() + ' - ' + variation.toLowerCase()
    );
    productRef.on('value', function (snapshot) {
      const productInfo = snapshot.val();
      return productInfo ? resolve(productInfo) : reject();
    });
  });
}

// Get current order ID
export function getOrderID() {
  return new Promise(function (resolve, reject) {
    const db = getDatabse();

    // Reference to order list in DB
    const dbRef = ref(db, 'orderList');

    // Retrieve order ID
    onValue(
      dbRef,
      (snapshot) => {
        var orderID = snapshot.numChildren();
        orderID = PadWithZeros(++orderID);
        return orderID ? resolve(orderID) : reject();
      },
      {
        onlyOnce: true,
      }
    );
  });
}

export function formatOrder(formInfo, cart) {
  const currentTimeStamp = getCurrentTimestamp()[0];
  const currentTimeOffset = getCurrentTimestamp()[1];

  return new Promise(function (resolve, reject) {
    getOrderID().then(function (orderID) {
      var order = {
        cart: cart,
        customerInfo: formInfo,
        orderID: orderID,
        time: {
          timeStamp: currentTimeStamp,
          offset: currentTimeOffset,
        },
      };
      return order ? resolve(order) : reject();
    });
  });
}

export function getProducts() {
  var inventory = [];

  return new Promise(function (resolve, reject) {
    const db = getDatabse();

    // Reference to order list in DB
    const dbRef = ref(db, 'inventory');

    // Retrieve each product in database
    onValue(
      dbRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childData = childSnapshot.val();

          const productItem = {
            productName: childData.productName,
            productVariation: childData.productVariation,
            productImages: childData.productImages,
          };

          inventory.push(productItem);
          return inventory ? resolve(inventory) : reject(inventory);
        });
      },
      {
        onlyOnce: true,
      }
    );
  });
}

export function addOrderToDB(order) {
  const db = getDatabase();
  const items = order.cart.items;

  for (let i = 0; i < items.length; i++) {
    let { productName, productVariation, itemSize, itemQuantity } = items[i];
    const dbPath =
      'inventory/' +
      productName.toLowerCase() +
      ' - ' +
      productVariation.toLowerCase() +
      '/product' +
      itemSize +
      'Quantity';

    updateInventory(dbPath, itemQuantity);
  }

  const orderListRef = ref(db, 'orderList');
  var orderUpdates = {};

  orderUpdates['orderList/' + push(orderListRef).key + '-' + order.orderID] =
    order;

  update(ref(db, orderUpdates));
}

function updateInventory(dbPath, itemQuantity) {
  const db = getDatabse();
  var inventoryUpdates = {};

  // Reference to order list in DB
  const dbRef = ref(db, 'value');

  // Retrieve order ID
  onValue(
    dbRef,
    (snapshot) => {
      var dbValue = snapshot.val();
      inventoryUpdates[dbPath] = dbValue + itemQuantity;

      update(ref(db, inventoryUpdates));
    },
    {
      onlyOnce: true,
    }
  );
}
