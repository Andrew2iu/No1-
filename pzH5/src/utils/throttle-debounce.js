// 节流函数
// 限制函数在一定时间内只能执行一次
export const throttle = (func, delay) => {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      return func.apply(this, args);
    }
  };
};

// 防抖函数
// 在事件触发后延迟一段时间执行函数，如果在延迟期间再次触发，则重新计时
export const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};