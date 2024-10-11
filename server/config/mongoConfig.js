require('dotenv').config();
const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectMongo;
