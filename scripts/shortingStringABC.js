String.prototype.replaceAt = function (index, endIndex, character) {
  return (
    this.substr(0, index) + character + this.substr(endIndex + character.length)
  );
};

// console.log('hello'.replaceAt(1,2,"_"));
function StringChallenge(str) {
  let stillPossible = false;
  const abc = ["a", "b", "c"];
  while (!stillPossible) {
    let justupdated = false;
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] !== str[i]) {
        const replacingChar = abc.filter(
          (ch) => ch !== str[i - 1] && ch !== str[i]
        )[0];
        str = str.replaceAt(i - 1, i, replacingChar);
        stillPossible = false;
        justupdated = true;
      } else if (!justupdated && str[i - 1] === str[i]) {
        stillPossible = true;
      }
    }
  }
  return str.length;
}
// keep this function call here
console.log(StringChallenge("abccbac")); // => ccc => 3
