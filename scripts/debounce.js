// console.log('hello!')

const getData = (a) => {
  const ele = document.getElementById("typeDebounce");
  console.log("fetch data...", ele.value);
};
const debounce = (fn, delay) => {
  let timer;
  return () => {
    // let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      // fn.apply(context);
      fn();
    }, delay);
  };
};
const withDebounce = debounce(getData, 400);
console.log(withDebounce);
// const withDebounce = getData;
