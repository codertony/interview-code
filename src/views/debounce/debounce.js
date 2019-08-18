export function debounce(fun, delay, immediate ) {
  let timer = null
  if(immediate) {
    return (...args) => {
      if(timer) {
        clearTimeout(timer)
      } else {
        fun.apply(this, args)
      }
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  } else {
    return (...args) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fun.apply(this, args)
      }, delay)
    }
  }
}


export function throttle(fun, delay) {
  let beforeTime = 0;
  return (...args) => {
    let Now = new Date().getTime()
    if((Now - beforeTime) > delay) {
      fun.apply(this, args)
      beforeTime = Now
    }
  }
}

export function throttle2(fun, delay, immediate) {
  let flag = true;
  return (...args) => {
    if(!flag) return;
    flag = false
    if(immediate) {
      fun.apply(this, args)
      setTimeout(() => {
        flag = true
      }, delay)
    } else {
      setTimeout(() => {
        fun.apply(this, args)
        flag = true
      }, delay)
    }
  }
}

export function throttle3(fun, delay, limit, immediate) {
  let timeNumber = 0;
  return (...args) => {
    if(timeNumber >= limit) return;
    timeNumber++
    if(immediate) {
      fun.apply(this, args)
      setTimeout(() => {
        timeNumber--
      }, delay)
    } else {
      setTimeout(() => {
        fun.apply(this, args)
        timeNumber--
      }, delay)
    }
  }
}
