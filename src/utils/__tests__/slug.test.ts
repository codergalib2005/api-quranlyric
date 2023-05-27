import slug from "../slug";

describe("Slug Tests", () => {
  it("should remove leading and trailing whitespace", () => {
    expect(slug("  hello  ")).toBe("hello");
  });

  it("should convert the string to lowercase", () => {
    expect(slug("HeLLo")).toBe("hello");
  });

  it("should remove accents and special characters", () => {
    expect(slug("Café Même")).toBe("cafe-meme");
  });

  it("should replace whitespace with dashes", () => {
    expect(slug("hello world")).toBe("hello-world");
  });

  it("should collapse consecutive dashes", () => {
    expect(slug("hello--world")).toBe("hello-world");
  });

  it("should remove invalid characters", () => {
    expect(slug("hello!@#$%^&*()_+123")).toBe("hello-123");
  });
});
