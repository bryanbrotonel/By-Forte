import { Handler } from '@netlify/functions';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref } from 'firebase/database';
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
async function getData( ref: string ) {
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

// Handle netlify function request
const handler: Handler = async (event, context) => {
  // If not using POST, return 405 Method Not Allowed
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

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
