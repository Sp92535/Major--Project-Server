// ./app.js

import express from 'express';

const app = express();

// Add all middlewares here
app.use(express.json());


export default app;