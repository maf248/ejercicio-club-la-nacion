// Importing modules
const express = require('express');

// Requiring router
const apiRouter = require('./routes/apiRouter');

// Setting port
const PORT = process.env.PORT || 3001;

// Initializing app
const app = express();

// API endpoints routes
app.use('/api', apiRouter);

// App listening port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});