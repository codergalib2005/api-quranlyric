import app from "../server";
import request from "supertest";

describe("should response with hello world the app directory", async () => {
  const response = await request(app).get("/");
  expect(1).toBe(1)
});
