import testFunction from "./index.js";

describe("An evergreen test", () => {
  test("Will I be run with ESM", () => {
    expect(testFunction()).toBe(42);
  });
});
