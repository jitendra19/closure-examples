String.prototype.toString = function () {
  return "*** " + this + " ***";
};

String.prototype.addBetween = function (startIndex, endIndex, randomString) {
  return (
    this.substring(0, startIndex) + randomString + this.substring(endIndex)
  );
};

String.prototype.replaceBetween = function (startIndex, endIndex, character) {
  return (
    this.substr(0, startIndex) +
    character +
    this.substr(endIndex + character.length)
  );
};

console.log("abc".toString());
console.log("abcd".addBetween(1, 1, "ZZZZZ"));
console.log("between ", "hello".replaceBetween(5, 6, "_"));
