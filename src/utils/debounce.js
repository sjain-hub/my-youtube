export const debounce = (fn, duration) => {
  let timer;
  return function (val) {
    console.log(timer, "timers");
    if (timer) {
      clearInterval(timer);
    }
    timer = setTimeout(() => {
      fn(val);
    }, duration);
  };
};
