// Entry point for the Express backend.
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');

const { env } = require('./config/env');
const connectDB = require('./config/db');
const logger = require('./middleware/logger');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
const { ApiResponse } = require('./utils/ApiResponse');

const app = express();
const PORT = env.PORT;

// Apply common middleware for parsing, logging, and cross-origin requests.
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);

// Serve uploaded files from the local uploads folder.
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check endpoint for deployment and smoke testing.
app.get('/api/health', (req, res) => {
  ApiResponse.success(
    res,
    200,
    {
      status: 'ok',
      environment: env.NODE_ENV,
      uptime: process.uptime()
    },
    'Labour Consultancy API is running'
  );
});

// API routers can be mounted here when their feature modules are ready.
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/workers', require('./routes/workers'));
// app.use('/api/employers', require('./routes/employers'));
// app.use('/api/jobs', require('./routes/jobs'));
// app.use('/api/applications', require('./routes/applications'));
// app.use('/api/admin', require('./routes/admin'));

// Handle unknown routes and centralized errors.
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Start the server only after the database connection succeeds.
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
