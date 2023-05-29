"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slug_1 = __importDefault(require("../slug"));
describe("Slug Tests", () => {
    it("should remove leading and trailing whitespace", () => {
        expect((0, slug_1.default)("  hello  ")).toBe("hello");
    });
    it("should convert the string to lowercase", () => {
        expect((0, slug_1.default)("HeLLo")).toBe("hello");
    });
    it("should remove accents and special characters", () => {
        expect((0, slug_1.default)("Café Même")).toBe("cafe-meme");
    });
    it("should replace whitespace with dashes", () => {
        expect((0, slug_1.default)("hello world")).toBe("hello-world");
    });
    it("should collapse consecutive dashes", () => {
        expect((0, slug_1.default)("hello--world")).toBe("hello-world");
    });
    it("should remove invalid characters", () => {
        expect((0, slug_1.default)("hello!@#$%^&*()_+123")).toBe("hello-123");
    });
});
//# sourceMappingURL=slug.test.js.map