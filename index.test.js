const { stringLength } = require("./index");

describe("Task 1", () => {
  test("get correct length", () => {
    // Arrange
    const string = "abc";

    // Act
    const length = stringLength(string);

    // Assert
    expect(length).toBe(3);
  });

  test("throw error on out of range", () => {
    // Arrange
    const emptyString = "";
    const longString = "abcdefghijk";

    // Act
    const runOnEmptyString = () => stringLength(emptyString);
    const runOnLongString = () => stringLength(longString);

    // Assert
    expect(runOnEmptyString).toThrowError("Minimum 1 character required!");
    expect(runOnLongString).toThrowError("Maximum 10 characters allowed!");
  });
});
