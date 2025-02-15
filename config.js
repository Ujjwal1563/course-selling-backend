const dotenv= require('dotenv')

dotenv.config()


module.exports = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  JWT_USER_PASSWORD: process.env.JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD: process.env.JWT_ADMIN_PASSWORD,
};