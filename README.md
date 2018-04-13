# Kindly Starter Kit for Javascript

Build your first chatbot integration using the Kindly&trade; platform.

## Quick start :rocket:

The fastest way to get started is to deploy this app to Heroku.

Just hit the button below to deploy your first bot integration. If you don't already have an Heroku account, you'll be prompted to create one.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/convertelligence/kindly-starterkit-js/tree/master)

You're going to need an API key from Kindly to complete the deployment.

Go to the [Kindly platform](https://platform.convertelligence.com). Navigate to your bot. Go to Connect. If you haven't already created an Application, do it now. Now go to the Application you created. Press "Show API key" and copy-paste the API into the `KINDLY_API_KEY` field.

Once the deployment is done, click View app.

Copy the URL and paste it into a dialogue webhook url.

## Getting started with local development

Open your UNIX terminal and run the following commands

```
git clone https://github.com/convertelligence/kindly-starterkit-js.git
cd kindly-starterkit-js
cp .env.default .env
```

### Set up your Kindly API key

Before you continue, open up the `.env` file in your editor.

Set the `KINDLY_API_KEY` value to the API key from your Kindly Application.

Now that that's taken care of, you're ready to continue the setup process:

```
npm install
npm start
```

:tada: If everything went smoothly, you should have a microserver running at
[http://localhost:9292](http://localhost:9292) that you can use for further testing.

### Using ngrok to develop locally

TODO: write about ngrok

## Building webhook integrations

Check out `src/index.js` in your preferred code editor or IDE.

TODO: write about webhook integrations

## Building app integrations

TODO: write about app integrations
