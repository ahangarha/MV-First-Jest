function capitalize(string) {
  const strArr = string.split("");
  strArr[0] = strArr[0].toUpperCase();
  return strArr.join("");
}

module.exports = capitalize;
