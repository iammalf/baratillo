import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const conectarDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log("Connected to MONGODB database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default conectarDB;
