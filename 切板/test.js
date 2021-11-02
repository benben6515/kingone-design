
const add = (...arg) => {
  if (arg.length === 1) {
    return (y) => {
      return arg[0] + y
    }
  }

  return arg.reduce((acc, cur) => acc + cur, 0) 
}

console.log(add(2)(5))
console.log(add(2, 5))
