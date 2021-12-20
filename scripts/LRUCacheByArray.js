function ArrayChallenge(strArr) {
  const cache = [];
  // code goes here
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i])
    if (cache.indexOf(strArr[i]) > -1) {
      cache.splice(cache.indexOf(strArr[i]), 1);
      cache.push(strArr[i]);
    } else {
      cache.push(strArr[i]);
    }
    if (cache.length > 5) {
      cache.splice(0, 1);
    }
  }
  return cache.join("-");
}

// keep this function call here
console.log(ArrayChallenge(["a", "b", "c", "d", "a", "b", "e", "c", "z"]));
