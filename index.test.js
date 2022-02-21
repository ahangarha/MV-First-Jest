const { stringLength, reverseString } = require("./index");

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

describe("Task 2", () => {
  test("reverse string", () => {
    // Arange
    const string = "abcd";

    // Act
    const reverse = reverseString(string);

    // Assert
    expect(reverse).toBe("dcba");
  });
});
