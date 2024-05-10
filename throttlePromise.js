function throttlePromises(funcs, max) {
    return new Promise((resolve, reject) => {
        let output = new Array(funcs.length);
        let i = 0;
        let pendingPromises = 0;
        let currentIndex = 0;

        function callback() {
            if (i === funcs.length && pendingPromises === 0) {
                resolve(output);
                return;
            }

            while (i < funcs.length && pendingPromises < max) {
                const index = currentIndex++; // Save current index
                funcs[i++]()
                    .then((data) => {
                        output[index] = data; // Place result at correct index
                        pendingPromises--;
                        callback();
                    })
                    .catch((e) => reject(e));
                pendingPromises++;
            }
        }

        callback();
    });
}
