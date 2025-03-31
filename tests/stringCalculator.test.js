const add = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if only one number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple numbers seperated by ","', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles new line as delimiter", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiter", () => {
  expect(add("//+\n1+2")).toBe(3);
});
