import { HandlerEvent } from '@netlify/functions';
var handlebars = require('handlebars');
var fs = require('fs');
const sendMail = require('./gmail');

const main = async () => {
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
        orderNumber: '123',
        customerFirstName: 'John',
        customerLastName: 'Doe',
        customerEmail: 'supplybyForte@gmail.com',
        productName: 'Product Name',
        productVariant: 'Product Variant',
        productQuantity: '1',
        productPrice: '100',
        cartSubtotal: '100',
        cartTotal: '100',
      };

      var htmlToSend = template(replacements);

      const options = {
        to: 'bryan.brotonel98@gmail.com',
        subject: `Order #{{orderNumber}} Confirmed - By Forte`,
        textEncoding: 'base64',
        html: htmlToSend,
      };

      const messageId = await sendMail(options);
      return messageId;
    }
  );
};

const handler = async (event: HandlerEvent) => {
  console.log('sending email');
  main()
    .then(() => console.log('Message sent successfully'))
    .catch((err) => console.error(err));
};

export { handler };
