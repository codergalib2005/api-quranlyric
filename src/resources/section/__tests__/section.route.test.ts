import request from "supertest";
import app from "../../../server";
import Section from "../section.model";

describe("/api/v1/sections", () => {
  beforeEach(async () => {
    // Clear the Section collection before each test
    await Section.deleteMany({});
  });

  it("should create a new section and respond with status 201", async () => {
    const sectionData = {
      name: "Section Name",
      order: 1,
      topic: "Section Topic",
    };

    const response = await request(app)
      .post("/api/v1/sections")
      .send(sectionData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveProperty("_id");
    expect(response.body.data.name).toBe(sectionData.name);
    expect(response.body.data.order).toBe(sectionData.order);
    expect(response.body.data.topic).toBe(sectionData.topic);
  });

  it("should retrieve all sections and respond with status 200", async () => {
    // Create some sample sections in the database
    await Section.create([
      { name: "Section 1", order: 1, topic: "Topic 1" },
      { name: "Section 2", order: 2, topic: "Topic 2" },
      { name: "Section 3", order: 3, topic: "Topic 3" },
    ]);

    const response = await request(app).get("/api/v1/sections");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data.length).toBe(3);
  });

  // Add more tests for other routes in the sections API
});
