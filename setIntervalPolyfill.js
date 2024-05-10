var id = 1;
var map = {};

function mySetInterval(callback, delay) {
    var intervalID = id++;
    function retry() {
        map[intervalID] = setTimeout(() => {
            callback();
            if (map[intervalID]) {
                retry();
            }
        }, delay);
    }
    retry();
    return intervalID;
}


