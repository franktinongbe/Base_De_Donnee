const mongoose = require("mongoose");
const DB_url =
  "mongodb+srv://admin:Passe123@cluster0.fppmek2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Base de données connectée");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
