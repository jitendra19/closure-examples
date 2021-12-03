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
testSingleton();

// new way to create singleton method

const ston = (function singleton() {
  function classFunction() {
    this.name = "jitendra";
  }
  let instance;
  return {
    getinstance: function () {
      if (!instance) instance = new classFunction();
      return instance;
    }
  };
})();
const a = ston.getinstance();
const b = ston.getinstance();
console.log("new Singleton --- ", a === b);
