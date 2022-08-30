const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');

const credentials = {
  installed: {
    client_id: `${process.env.REACT_APP_GMAIL_CLIENT_ID}`,
    project_id: `${process.env.REACT_APP_GMAIL_PROJECT_ID}`,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_secret: `${process.env.REACT_APP_GMAIL_CLIENT_SECRET}`,
    redirect_uris: ['http://localhost'],
  },
};

const tokens = {
  access_token: `${process.env.REACT_APP_GMAIL_ACCESS_TOKEN}`,
  refresh_token: `${process.env.REACT_APP_GMAIL_REFRESH_TOKEN}`,
  scope: 'https://www.googleapis.com/auth/gmail.send',
  token_type: `${process.env.REACT_APP_GMAIL_TOKEN_TYPE}`,
  expiry_date: process.env.REACT_APP_GMAIL_EXPIRY_DATE,
};

// Fetches gmail API service
const getGmailService = () => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const { data: { id } = {} } = await gmail.users.messages.send({
    userId: 'me',
    resource: {
      raw: rawMessage,
    },
  });
  return id;
};

module.exports = sendMail;
