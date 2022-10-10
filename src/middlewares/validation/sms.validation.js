import { SmsSchema } from './schemes';
import ValidatorUtil from './util/validator.util';

class SmsValidation {
  static validateSendArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SmsSchema.sendSchema, next);
  }

  static validateResiveArgs(req, res, next) {
    ValidatorUtil.validateArgs(req, SmsSchema.resiveSchema, next);
  }
}

export default SmsValidation;
