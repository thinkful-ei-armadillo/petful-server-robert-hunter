'use strict';

const CatRouter = require('./cat/cat-router');
const DogRouter = require('./dog/dog-router');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const { NODE_ENV, CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(
  morgan(NODE_ENV === 'production' ? 'tiny' : 'common', {
    skip: () => NODE_ENV === 'test'
  })
);
app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(helmet());

app.use('/api/cat', CatRouter);
app.use('/api/dog', DogRouter);

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Serving on PORT');
});
