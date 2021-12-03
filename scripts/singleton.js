var returnClass;
function singleton(Class) {
  return function () {
    if (!returnClass) {
      returnClass = new Class();
    }
    return returnClass;
  };
}

function abc() {
  this.name = "jitendra";
}

function testSingleton() {
  // singleton();
  // return true;
  const a = new abc();
  const b = new abc();
  console.log("two non singleton classes ---", a === b);

  const x = singleton(abc)();
  const y = singleton(abc)();
  console.log("two singleton classes ---", x === y);
}
console.log("singleton --- ", testSingleton());
