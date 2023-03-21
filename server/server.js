const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')
// import connectMongodb from '../database/connection'

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const port = 3000

app.prepare()
.then(() => {
  const server = express();

  // connectMongodb();

  // Makes it so the Express.js server can use Json parsing
  let jsonParser = bodyParser.json()
  server.use(jsonParser);

  // Route for all static HTML pages
  server.get('*', (req, res) => { return handle(req, res); });

  // Server's listen function that gets called on initialization
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  })
});