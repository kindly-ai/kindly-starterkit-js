# Kindly Starter Kit for Javascript

Build your first chatbot integration using the Kindly&trade; platform.

## Quick start :rocket:

The fastest way to get started is to deploy this repo using Heroku.

Hit the button below to start the deployment. If you don't already have an account on Heroku, you'll have to create one. Don't worry, its free to try out.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/convertelligence/kindly-starterkit-js/tree/master)

You'll be asked to give the Heroku application a name, select a region (US or Europe) and enter a `KINDLY_API_KEY`.

To create an API key, go to the [Kindly platform](https://platform.convertelligence.com). Navigate to your bot. Go to Connect from the sidebar menu. If you haven't already created an Application, do it now. Now go to the Application you created. Press "Show API key" and copy-paste the API into the `KINDLY_API_KEY` field.

Once the deployment is done, click View app. Copy the URL from the web page and paste it into a dialogue webhook url. Now open the chatbubble and try to make your chatbot trigger the dialogue.

:tada: Congratulations! You've integrated your first chatbot! :sparkles:

## Getting started with local development

Now for the fun part: Come up with an integration idea! [Check out this list](https://github.com/abhishekbanthia/Public-APIs) for tips! :runner:

:bulb: Once you've found the perfect idea for a bot integration, you can clone the source code from your newly created Heroku app by running the following command:

`heroku git:clone -a myapp`

Replace myapp with the name of your Heroku application.

This will create a local directory `myapp` that you can use for further development and testing, as well as add a git remote named `heroku` that you can use to push updates to the live Heroku app.

Go to the new directory and start the application locally:

```
cd myapp
heroku local
```

Now start `ngrok` so you can tunnel requests from Kindly to your local app. That way you dont need to deploy the app to Heroku every time you make a change.

`ngrok http 9292`

This will give you an ngrok URL that you can use for Kindly webhooks.

## Getting started for non-Heroku users

Open your terminal and run the following commands:

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

:tada: If everything went smoothly, you should have a webserver running at [http://localhost:9292](http://localhost:9292) that you can use for further development.
