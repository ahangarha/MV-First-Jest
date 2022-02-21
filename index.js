function stringLength(string) {
  const length = string.length;

  if (length < 1) {
    throw "Minimum 1 character required!";
  } else if (length > 10) {
    throw "Maximum 10 characters allowed!";
  } else {
    return length;
  }
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

module.exports = {
  stringLength,
  reverseString,
};
