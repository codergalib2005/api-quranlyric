"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../../server"));
const section_model_1 = __importDefault(require("../section.model"));
describe("/api/v1/sections", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clear the Section collection before each test
        yield section_model_1.default.deleteMany({});
    }));
    it("should create a new section and respond with status 201", () => __awaiter(void 0, void 0, void 0, function* () {
        const sectionData = {
            name: "Section Name",
            order: 1,
            topic: "Section Topic",
        };
        const response = yield (0, supertest_1.default)(server_1.default)
            .post("/api/v1/sections")
            .send(sectionData);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data).toHaveProperty("_id");
        expect(response.body.data.name).toBe(sectionData.name);
        expect(response.body.data.order).toBe(sectionData.order);
        expect(response.body.data.topic).toBe(sectionData.topic);
    }));
    it("should retrieve all sections and respond with status 200", () => __awaiter(void 0, void 0, void 0, function* () {
        // Create some sample sections in the database
        yield section_model_1.default.create([
            { name: "Section 1", order: 1, topic: "Topic 1" },
            { name: "Section 2", order: 2, topic: "Topic 2" },
            { name: "Section 3", order: 3, topic: "Topic 3" },
        ]);
        const response = yield (0, supertest_1.default)(server_1.default).get("/api/v1/sections");
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("data");
        expect(response.body.data.length).toBe(3);
    }));
    // Add more tests for other routes in the sections API
});
//# sourceMappingURL=section.route.test.js.map