// NPM Modules
import twilio from 'twilio';

// Local Modules
import config from '../config/variables.config';

const { TWILIO } = config;
const {
  TOKEN_SID, TOKEN_SECRET, ACOUNT_SID, PHONE_NUMBER
} = TWILIO;

const client = twilio(
  TOKEN_SID,
  TOKEN_SECRET,
  {
    accountSid: ACOUNT_SID
  }
);

export default class TwilioUtil {
  static sendSms(to, message) {
    return client.messages.create({
      friendlyName: 'Sensei',
      from: PHONE_NUMBER,
      statusCallback: 'https://clever-singers-tell-46-70-166-192.loca.lt/api/v1/sms/changedStatus',
      to,
      body: message
    });
  }

  static checkBalance() {
    return client.balance.fetch();
  }
}
