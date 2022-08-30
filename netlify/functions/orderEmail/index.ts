import { Handler } from '@netlify/functions';
import { TypeCheckoutOrder } from '../../../src/types';
var handlebars = require('handlebars');
const fs = require('fs/promises');
const sendMail = require('./gmail');

// Read HTML file
const readHTMLFilePromise = async (path: string) => {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Send email
const sendEmailPromise = async (cartData: TypeCheckoutOrder) => {
  const html = await readHTMLFilePromise(
    './netlify/functions/assets/orderEmail/template.html'
  );

  // Compile HTML
  var template = handlebars.compile(html);

  // Replace placeholders with data
  var replacements = {
    id: cartData.id,
    customer: cartData.customer,
    cart: cartData.cart,
  };

  var htmlToSend = template(replacements);

  // Connfigure email options
  const options = {
    to: cartData.customer.email,
    subject: `Order #${cartData.id} Confirmed`,
    textEncoding: 'base64',
    html: htmlToSend,
  };

  return await sendMail(options);
};

const handler: Handler = async (event, context) => {
  // If no body, return 400 Bad Request
  if (!event.body) {
    return {
      statusCode: 400,
      body: 'Bad Request',
    };
  }

  const { payload } = JSON.parse(event.body);
  const { customer, cart } = payload;

  // Create cart data with array of items
  const cartData = {
    ...cart,
    items: Object.values(cart.items),
  };

  const emailData = {
    id: payload.id,
    customer: customer,
    cart: cartData,
  } as TypeCheckoutOrder;

  const email = await sendEmailPromise(emailData);

  return {
    statusCode: 200,
    body: JSON.stringify({ response: email }),
  };
};

export { handler };
