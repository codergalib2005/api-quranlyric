import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then((e) => console.log(e))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
