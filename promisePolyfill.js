function Promise(executer) {
    let onResolve
    let onReject;
    function resolve(value) {
        onResolve(value);
    }
    function reject(value) {
        onReject(value)
    }
    this.then = function (callback) {
        onResolve = callback;
        return this;
    }
    this.catch = function (callback) {
        onReject = callback;
        return this;
    }
    executer(resolve, reject);
}

const p1 = new Promise((res, rej) => {
    // setTimeout(()=>{
    res('100');
    // },1000);
})

p1.then((data) => console.log(data));