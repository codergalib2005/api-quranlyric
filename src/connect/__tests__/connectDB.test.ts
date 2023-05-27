import mongoose from "mongoose";
import connectDB from "../connectDB";

describe("connectDB", () => {
  beforeAll(async () => {
    // Set up a mock for the mongoose.connect function
    mongoose.connect = jest.fn().mockResolvedValue(undefined);
  });

  afterAll(async () => {
    // Clean up and restore the original behavior of mongoose.connect
    (mongoose.connect as any).mockReset();
    await mongoose.disconnect();
  });

  it("should connect to the database", async () => {
    await connectDB();

    // Expect mongoose.connect to have been called with the correct URI
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGO_URI);
  });

  it("should reject with an error if the database connection fails", async () => {
    // Set up a mock for the mongoose.connect function to simulate a connection failure
    (mongoose.connect as any).mockRejectedValue(new Error("Connection failed"));

    await expect(connectDB()).rejects.toThrowError("Connection failed");
  });
});
