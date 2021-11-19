const fireMe = () => {
  const inputValue = document.getElementById('typeThrottle').value;
  console.log('event is fired with input value', inputValue);
};

const throttle = (fn, delay) => {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn();
        timer = '';
      }, delay);
    }
  };
};

const withThrottle = throttle(fireMe, 1000);
