import mongoose from "mongoose";

const connectDB = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default connectDB;
