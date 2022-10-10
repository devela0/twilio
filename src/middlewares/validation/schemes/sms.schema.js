// NPM Modules
import Joi from 'joi';

const SmsSchema = {
  sendSchema: {
    body: Joi.object({
      phoneNumbers: Joi.array().items(Joi.string().min(1)),
      message: Joi.string().min(1).max(1600)
    })
  },

  resiveSchema: {
    message: Joi.string().min(1).max(1600)
  }
};

export default SmsSchema;
