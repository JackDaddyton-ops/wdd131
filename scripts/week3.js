console.log("Hello World");
function doubleNo(num) {
    return num * 2;
}
const double2 = function (num) {
    return num * 2;
}

const double3 = (num) => { return num * 2 }

const double4 = (num) => num * 2

function modifyList(list, callback) {
    list.forEach(callback);
}

modifyList([1, 2, 3], function (num) { return num * 2 })

modifyList([1, 2, 3], (num) => num * 2)
