// NPM Modules
import express from 'express';

// Local Modules
import sms from './sms.api';

const app = express();

// API
app.use('/sms', sms);
export default app;
