var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [1, 2, 3, 4, 5];
//let arr2 = arr1;
var arr2 = __spreadArray([], arr1, true);
for (var index = 0; index < 10; index++) {
    arr1[index] = arr1[index] * 2;
}
console.log(arr2);
console.log(arr1);
