# General Project Information
This is a [Node.js](https://nodejs.org/en/about) project built using [Next.js](https://nextjs.org/) as the front-end framework, [Express.js](https://expressjs.com/) for the back-end, and [MongoDb](https://www.mongodb.com/docs/) as a database. Also, the [Bootstrap library](https://getbootstrap.com/) is used for easier CSS styling, and [Mongoose](https://mongoosejs.com/) is used for connecting to MongoDb and perform data object mapping. Here is a simple diagram representation of the application's architecture:
![Diagram of the application's architecture](https://i.imgur.com/XhLCnLj.png)

## What is React and Next.js?
**React** is a component building JavaScript library for creating front-end applications, while **Next.js** is a framework built around React.

# Requirements For Running This Project
1. [Node.js installation](https://nodejs.org/en)
2. [MongoDb installation](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (optional, this is only in case you'd like to work with your own database)
- When installing MongoDb, I **highly advise** also installing MongoDb Compass, which is an user interface for MongoDb (the "usual" way of interacting with MongoDb is through the console).

# Running The Application Locally
## Starting The Application
In order to start the application from the command line, you should run the following command at the application's root folder:
```
npm run dev
```

![Npm run dev example](https://i.imgur.com/nANYz0V.png)

After running the command, go to `http://localhost:3000` and you should see that the application was started locally:
![Application running locally example](https://i.imgur.com/e9bFCkB.png)

## Folder Structure
- _pages_: where all the application pages are going to be created. Next.js has a [file-system based router for pages](https://nextjs.org/docs/routing/introduction), so each folder inside the "pages" directory is a route, with `index.js` serving as the entry point.
- _components_: where page components are located.
- _public_: where all resources (like images and icons) are stored.
- _server_: where the back-end section of the application is located (Express.js and its router controllers for the API)
- _styles_: where the application's CSS stylesheets are located.
- _database_: where the database connection functions and data models are located.