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
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB_1 = __importDefault(require("../connectDB"));
describe("connectDB", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Set up a mock for the mongoose.connect function
        mongoose_1.default.connect = jest.fn().mockResolvedValue(undefined);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        // Clean up and restore the original behavior of mongoose.connect
        mongoose_1.default.connect.mockReset();
        yield mongoose_1.default.disconnect();
    }));
    it("should connect to the database", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, connectDB_1.default)();
        // Expect mongoose.connect to have been called with the correct URI
        expect(mongoose_1.default.connect).toHaveBeenCalledWith(process.env.MONGO_URI);
    }));
    it("should reject with an error if the database connection fails", () => __awaiter(void 0, void 0, void 0, function* () {
        // Set up a mock for the mongoose.connect function to simulate a connection failure
        mongoose_1.default.connect.mockRejectedValue(new Error("Connection failed"));
        yield expect((0, connectDB_1.default)()).rejects.toThrowError("Connection failed");
    }));
});
//# sourceMappingURL=connectDB.test.js.map