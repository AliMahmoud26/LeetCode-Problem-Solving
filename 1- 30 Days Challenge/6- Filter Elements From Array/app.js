/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
*/

var filter = function(arr, fn) {
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            filteredArray.push(arr[i])
        } // Return Numbers
        
        // filteredArray.push(fn(arr[i], i)) ===> Return Boolean Values
    }
    return filteredArray
};

let arr = [0,10,20,30]
let greaterThan10 = function(n) {return n > 10}
let newArray = filter(arr, greaterThan10)
console.log(newArray);
