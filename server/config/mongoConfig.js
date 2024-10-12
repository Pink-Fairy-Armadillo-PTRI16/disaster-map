const mongoose = require('mongoose');



const connectMongo = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://pinkfairyarmadillos:pinkfairyarmadillos%21%40@disaster-map-scratch-pr.ugf9z.mongodb.net/?retryWrites=true&w=majority&appName=disaster-map-scratch-project");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectMongo;
