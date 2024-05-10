function add(...args) {
    let sum = args;
    function resultFn(...next) {
        sum.push(...next);
        return resultFn;
    }
    resultFn.valueOf = function () {
        return sum.reduce((a, b) => a + b, 0);
    }
    resultFn.value = resultFn.valueOf;
    return resultFn;
}


console.log(add(1)(2).value());
console.log(add(1, 2).value());
console.log(add(1, 2)(3).value());
console.log(add(1)(2)(3).value());
