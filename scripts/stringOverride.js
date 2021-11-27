String.prototype.toString = function () {
  return "*** " + this + " ***";
};

String.prototype.addBetween = function (startIndex, endIndex, randomString) {
  return (
    this.substring(0, startIndex) + randomString + this.substring(endIndex)
  );
};
