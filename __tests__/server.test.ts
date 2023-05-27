import request from "supertest";
import app from "../src/server";
import connectDB from "../src/connect/connectDB";

describe("App", () => {
  beforeAll(async () => {
    // Connect to the database before running the tests
    await connectDB();
  });

  afterAll(async () => {
    // Close the database connection after running the tests
    // Add any necessary cleanup code here
  });

  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, World!");
  });
});
