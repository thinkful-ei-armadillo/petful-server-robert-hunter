'use strict';

const CatRouter = require('./cat/cat-router');
const DogRouter = require('./dog/dog-router');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use('/api/cat', CatRouter);
app.use('/api/dog', DogRouter);
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';
app.use(morgan(morganSetting));

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
