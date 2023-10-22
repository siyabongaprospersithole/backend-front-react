const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const db = require('./database/connection');
const brandRoutes = require('./routes/brands');

// Enable CORS for all routes
app.use(cors());

// Add JSON body parser middleware to handle JSON requests
app.use(express.json());

// Middleware to pass the database connection to the request object
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Define your API routes
app.use('/api/brands', brandRoutes);

// Error handling middleware to catch and handle any errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
