String.prototype.toString = function () {
  return "*** " + this + " ***";
};

String.prototype.addBetween = function (startIndex, endIndex, randomString) {
  return (
    this.substring(0, startIndex) + randomString + this.substring(endIndex)
  );
};

console.log("abc".toString());
console.log("abcd".addBetween(1, 1, "ZZZZZ"));
