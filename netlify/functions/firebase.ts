import { Handler } from '@netlify/functions';
import _ from 'lodash';
import { initializeApp } from 'firebase/app';
import {
  child,
  get,
  getDatabase,
  push,
  ref,
  update,
} from 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: 'https://by-forte.firebaseio.com',
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGEING_SENDING_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

initializeApp(firebaseConfig);
const dbRef = ref(getDatabase());

// Get product data from firebase database
async function getData(ref: string) {
  return await get(child(dbRef, ref))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
        console.log('No products data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

async function writeOrderData(order: object) {
  const db = getDatabase();

  const orderID = await generateOrderID();

  const newOrderKey = `${push(child(ref(db), 'orders')).key}-${orderID}`;

  const updates = { [`orders/${newOrderKey}`]: order };
  updates['orders/' + newOrderKey] = order;

  return await update(ref(db), updates).then(() => {
    return orderID;
  });
}

async function generateOrderID() {
  const dbRef = ref(getDatabase());

  return await get(child(dbRef, 'orders')).then((snapshot) => {
    const orderID = snapshot.size + 1;
    return _.padStart(String(orderID), 4, '0');
  });
}

// Handle netlify function request
const handler: Handler = async (event, context) => {
  // If no body, return 400 Bad Request
  if (!event.body) {
    return {
      statusCode: 400,
      body: 'Bad Request',
    };
  }

  const { action, payload } = JSON.parse(event.body);

  let responseData = '';
  let statusCode;

  // Handle different actions to perform
  switch (action) {
    case 'getData':
      responseData = JSON.stringify(await getData(payload));
      break;
    case 'writeOrderData':
      const order = JSON.parse(payload);
      responseData = JSON.stringify(await writeOrderData(order));
      break;
    default:
      statusCode = 400;
      responseData = 'Invalid action';
      break;
  }

  return {
    statusCode: statusCode || 200,
    body: responseData,
  };
};

export { handler };
