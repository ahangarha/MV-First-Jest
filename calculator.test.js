const Calculator = require("./calculator");

describe("Add", () => {
  test("add two positive numbers", () => {
    const calculator = new Calculator();
    const m = 5,
      n = 6;

    const result = calculator.add(m, n);

    expect(result).toBe(11);
  });

  test("add two negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = -6;

    const result = calculator.add(m, n);

    expect(result).toBe(-11);
  });

  test("add positive and negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = 6;

    const result = calculator.add(m, n);

    expect(result).toBe(1);
  });
});

describe("subtract", () => {
  test("subtract two positive numbers", () => {
    const calculator = new Calculator();
    const m = 5,
      n = 6;

    const result = calculator.subtract(m, n);

    expect(result).toBe(-1);
  });

  test("subtract two negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = -6;

    const result = calculator.subtract(m, n);

    expect(result).toBe(1);
  });

  test("subtract positive and negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = 6;

    const result = calculator.subtract(m, n);

    expect(result).toBe(-11);
  });
});

describe("Divide", () => {
  test("divide two positive numbers", () => {
    const calculator = new Calculator();
    const m = 4,
      n = 2;

    const result = calculator.divide(m, n);

    expect(result).toBe(2);
  });

  test("divide two negative numbers", () => {
    const calculator = new Calculator();
    const m = -4,
      n = -2;

    const result = calculator.divide(m, n);

    expect(result).toBe(2);
  });

  test("divide positive and negative numbers", () => {
    const calculator = new Calculator();
    const m = -4,
      n = 2;

    const result = calculator.divide(m, n);

    expect(result).toBe(-2);
  });

  test("divide by zero throws error", () => {
    const calculator = new Calculator();
    const m = 4,
      n = 0;

    const result = () => calculator.divide(m, n);

    expect(result).toThrowError("Division by zero is not allowed!");
  });
});

describe("Multiply", () => {
  test("multiply two positive numbers", () => {
    const calculator = new Calculator();
    const m = 5,
      n = 6;

    const result = calculator.multiply(m, n);

    expect(result).toBe(30);
  });

  test("multiply two negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = -6;

    const result = calculator.multiply(m, n);

    expect(result).toBe(30);
  });

  test("multiply positive and negative numbers", () => {
    const calculator = new Calculator();
    const m = -5,
      n = 6;

    const result = calculator.multiply(m, n);

    expect(result).toBe(-30);
  });
});
