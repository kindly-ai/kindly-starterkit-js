// Import some required libraries
import Hapi from 'hapi';
import inert from 'inert';
import kindly from 'kindly-js';


// Configure the webserver
const port = process.env.PORT || 9292;
const host = process.env.HOST || '0.0.0.0';
const server = Hapi.server({ port, host });

// Set up connection to Kindly
kindly.API_KEY = process.env.KINDLY_API_KEY;
kindly.API_HOST = process.env.KINDLY_HOST;

// Example route for Applications:
// Creating a new user, so that the chatbot remembers you next time
server.route({
  method: 'POST',
  path: '/kindly/new-user/',
  handler: (request) => {
    const { payload } = request;

    kindly.creatUser({
      user: payload
    });

    return {};
  },
});

// Example route: Kindly sends a dialogue webhook to your app
server.route({
  method: 'POST',
  path: '/webhook',
  handler: (request) => {
    const { payload } = request;

    console.log('Incoming webhook request from Kindly:');
    console.log(payload);

    // Send back a proper payload to Kindly
    // See https://docs.kindly.ai for more details
    return {};
  },
});


// Example route for Applications:
// You're app frontend sends a request to this backend app, which sends a query to Kindly.
server.route({
  method: 'POST',
  path: '/kindly/outgoing/',
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


// Example route for Applications:
// Kindly sends a bot response to your app
server.route({
  method: 'POST',
  path: '/kindly/incoming/',
  handler: (request) => {
    const { payload } = request;

    console.log('Kindly sent your app the following payload:');
    console.log(payload);

    // Do something clever with the payload in your own app.
    return {};
  },
});

// Setup your webserver
const init = async () => {
  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      kindly.greet({
        user_id: 'Some user token', // User/chat identifier
      });

      return h.file('./public/index.html');
    },
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
