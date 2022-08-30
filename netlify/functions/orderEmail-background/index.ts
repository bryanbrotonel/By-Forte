import { HandlerEvent } from '@netlify/functions';
import { TypeCheckoutOrder } from '../../../src/types';
var handlebars = require('handlebars');
var fs = require('fs');
const sendMail = require('./gmail');

const main = async (cartData: TypeCheckoutOrder) => {
  var readHTMLFile = function (path: string, callback: Function) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err: string, html: any) {
      if (err) {
        callback(err);
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  return await readHTMLFile(
    './netlify/functions/assets/orderEmail/template.html',
    async function (err: string, html: any) {
      var template = handlebars.compile(html);
      var replacements = {
        id: cartData.id,
        customer: cartData.customer,
        cart: cartData.cart,
      };

      var htmlToSend = template(replacements);

      const options = {
        to: cartData.customer.email,
        subject: `Order #${cartData.id} Confirmed`,
        textEncoding: 'base64',
        html: htmlToSend,
      };

      const messageId = await sendMail(options);
      return messageId;
    }
  );
};

const handler = async (event: HandlerEvent) => {
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

  main(emailData).catch((err) => console.error(err));
};

export { handler };
