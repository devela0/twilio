const config = {
  PORT: process.env.PORT || 3040,
  DISABLE_REQUEST_LOG: process.env.DISABLE_REQUEST_LOG,
  CORS: process.env.CORS?.split(',') || '*',
  TWILIO: {
    TOKEN_SID: process.env.TOKEN_SID,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    ACOUNT_SID: process.env.ACOUNT_SID,
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    SESSION_SECRET: process.env.SESSION_SECRET || 'secret'
  }

};

export default config;
