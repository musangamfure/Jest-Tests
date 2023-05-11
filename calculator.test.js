const Calculator = require("./calculator.js");
describe("Calculator", () => {
  test("should add two numbers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test("should subtract two numbers", () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
  test("should multiply two numbers", () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
  test("should divide two numbers", () => {
    expect(Calculator.divide(1, 2)).toBe(0.5);
  });
});
