// NPM Modules
import express from 'express';

// Local Modules
import { SmsValidationMiddleware } from '../middlewares/validation';
import { SmsController } from '../controller';

const router = express.Router();

// Send sms from twilio
router.post('/send',
  SmsValidationMiddleware.validateSendArgs,
  SmsController.send);

// TODO
router.post('/changedStatus',
  SmsController.changedStatus);

router.post('/recive',
  SmsValidationMiddleware.validateResiveArgs,
  SmsController.recive);

router.get('/balance',
  SmsController.checkBalance);

export default router;
