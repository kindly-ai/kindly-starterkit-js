import Hapi from 'hapi';
import kindly from 'kindly-js';

const port = process.env.PORT || 9292;
const host = process.env.HOST || 'localhost';

const server = Hapi.server({ port, host });

// Set your Kindly API key here.
// 1. Go to the Kindly platform (platform.convertelligence.com)
// 2. Go to your bot
// 3. Go to Connect
// 4. Create an Application
// 5. Press "Show API key"
// 6. Copy-paste the API key here
kindly.API_KEY = process.env.KINDLY_API_KEY;

server.route({
  method: 'GET',
  path: '/',
  handler: () => 'Your Kindly Starter Kit for Javascript is live',
});

// Example Webhook from Kindly
server.route({
  method: 'POST',
  path: '/examples/webhook',
  handler: (request) => {
    const { payload } = request;

    console.log('Incoming webhook request from Kindly:');
    console.log(payload);

    // Send back a proper payload to Kindly
    // See https://docs.kindly.ai for more details
    const jsonResponse = {
      reply: 'This is an example response from some integration',
      buttons: [
        {
          button_type: 'quick_reply',
          label: 'Say hi to the bot',
          value: 'hi',
        },
        {
          button_type: 'link',
          label: 'Go to Google',
          value: 'https://www.google.com',
        },
      ],
    };
    return jsonResponse;
  },
});

// Example POST request from custom app
server.route({
  method: 'POST',
  path: '/example/app',
  handler: (request) => {
    const { payload } = request;

    console.log('Your custom app sent this payload, you probably need it:');
    console.log(payload);

    // Send a query to Kindly.
    // Kindly will POST a response to the Webhook URL specified in your application.
    kindly.send({
      user_id: 'Some user token', // User/chat identifier
      message: 'Message to bot', // What to ask bot
    });

    return {};
  },
});

// Example POST webhook response from Kindly to custom app
server.route({
  method: 'POST',
  path: '/example/',
  handler: (request) => {
    const { payload } = request;

    console.log('Kindly sent your app the following payload:');
    console.log(payload);

    // Do something with the payload in your own app.
    return {};
  },
});

server.start();

console.log(`Server running at: ${server.info.uri}`);
