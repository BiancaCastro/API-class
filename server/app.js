require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const cors         = require('cors');
const path         = require('path');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then((x) => {
    debug(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    debug('Error connecting to mongo', err);
  });


const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'],
}));

app.use('/', require('./routes/index'));

app.use((req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
