// Importing modules
const express = require('express');
const path = require('path');
// Requiring router
const apiRouter = require('./routes/apiRouter');

// Setting port
const PORT = process.env.PORT || 3001;

// Initializing app
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// API endpoints routes
app.use('/api', apiRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// App listening port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});