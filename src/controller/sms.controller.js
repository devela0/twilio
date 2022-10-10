// Local Modules
import { SmsServices } from '../services';
import { SuccessHandlerUtil } from '../utils';

class SmssController {
  static async send(req, res, next) {
    try {
      const payload = req.body;
      const dataInfo = await SmsServices.send(payload);

      const responseInfo = dataInfo.map((d) => ({
        from: d.from, to: d.to, sid: d.sid, status: d.status
      }));

      SuccessHandlerUtil.handleGet(res, next, responseInfo);
    } catch (error) {
      next(error);
    }
  }

  static async changedStatus(req, res, next) {
    try {
      const {
        From: from,
        To: to,
        SmsSid: sid,
        SmsStatus: status
      } = req.body;

      await SmsServices.changedStatus({
        from, to, sid, status
      });
    } catch (error) {
      next(error);
    }
  }

  static recive(req, res, next) {
    try {
      const payload = req.body;
      console.log('payload =>', payload);
      return;
      // const result = SmsServices.resive(payload);
      // console.log('result => ', result);
      // SuccessHandlerUtil.handleGet(res, next, result);
    } catch (error) {
      next(error);
    }
  }

  static async checkBalance(req, res, next) {
    try {
      const { balance, currency } = await SmsServices.checkBalance();
      SuccessHandlerUtil.handleGet(res, next, { balance, currency });
    } catch (error) {
      next(error);
    }
  }
}

export default SmssController;
