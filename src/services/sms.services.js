// NPM Modules
import axios from 'axios';

// Local Modules
import { TwilioUtil } from '../utils';

class SmsServices {
  static send(payload) {
    const { phoneNumbers, message } = payload;

    return Promise.all(
      phoneNumbers.map((phoneNumber) => TwilioUtil.sendSms(phoneNumber, message))
    );
  }

  static resive(payload) {
    const { message } = payload;
    return TwilioUtil.resiveSms(message);
  }

  static checkBalance() {
    return TwilioUtil.checkBalance();
  }

  static changedStatus(payload) {
    const config = {
      method: 'post',
      data: payload,
      url: 'https://fruity-carpets-shout-46-70-166-192.loca.lt/sms/status'
    };

    return axios(config);
  }
}

export default SmsServices;
