const capitalize = require("./capitalize");

test("capitalize first letter", () => {
  const string = "abcd";

  const result = capitalize(string);

  expect(result).toBe("Abcd");
});

test("capitalize empty string", () => {
  const string = "";

  const result = capitalize(string);

  expect(result).toBe("");
});
