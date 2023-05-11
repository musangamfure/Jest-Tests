const lengthString = require("./length");
describe("The length of the string", () => {
  test("should return the length of the string", () => {
    expect(lengthString("hello")).toBe(5);
  });
});
