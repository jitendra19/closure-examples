function areSimilar(obj1, obj2) {
  let returnValue = true;
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    const obj1Props = Object.keys(obj1);
    const obj2Props = Object.keys(obj2);
    if (obj1Props.length !== obj2Props.length) {
      returnValue = false;
      return false;
    } else {
      //       if(!(obj1Props.every(obj2Props) && obj2Props.every(obj1Props))) {
      //           returnValue = false;
      //           return false;
      //       } else {
      for (let i in obj1) {
        if (typeof obj1[i] === 'object' || Array.isArray(obj1[i])) {
          if (!areSimilar(obj1[i], obj2[i])) {
            returnValue = false;
            return false;
          }
        } else {
          if (obj1[i] !== obj2[i]) {
            returnValue = false;
            return false;
          }
        }
      }
      // }
    }
  } else {
    // Array
    if (obj1.length !== obj2.length) {
      returnValue = false;
      return false;
    } else {
      for (let j in obj1) {
        // if(obj2.indexOf(j) < 0) {
        // returnValue = false;
        //         return false;
        // }
        if (typeof obj1[j] === typeof obj2[j]) {
          if (typeof obj1[j] === 'object' || Array.isArray(obj1[j])) {
            if (!areSimilar(obj1[j], obj2[j])) {
              returnValue = false;
              return false;
            }
          } else {
            if (obj1[j] !== obj2[j]) {
              returnValue = false;
              return false;
            }
          }
        }
      }
    }
  }
  return returnValue;
}
var a = { abc: '123' };
var b = { abc: '123', k: '123' };

console.log(areSimilar(a, b) === false); // true

a = { abc: '123', i: { j: '12' } };
b = { abc: '123', i: { j: '12' } };

console.log(areSimilar(a, b) === true); // true

a = { abc: '123', i: { j: '123' } };
b = { abc: '123', i: { j: '12' } };

console.log(areSimilar(a, b) === false); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, 4] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, 4] };

console.log(areSimilar(a, b) === true); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, 4] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 4, 3] };

console.log(areSimilar(a, b) === false); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, 4] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, {}] };

console.log(areSimilar(a, b) === false); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, 4] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, {}] };

console.log(areSimilar(a, b) === false); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, [5, 6, 7]] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, [5, 6, 7]] };

console.log(areSimilar(a, b) === true); // true

a = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, [5, 6, 7]] };
b = { abc: '123', i: { j: '12', ne: [{}] }, k: [1, 2, 3, [5, 6, {}]] };

console.log(areSimilar(a, b) === false); // true
