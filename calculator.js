class Calculator {
  add(m, n) {
    return m + n;
  }

  subtract(m, n) {
    return m - n;
  }

  divide(m, n) {
    if (n === 0) throw "Division by zero is not allowed!";
    return m / n;
  }

  multiply(m, n) {
    return m * n;
  }
}

module.exports = Calculator;
