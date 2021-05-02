const arr = [1, 2, 3, 4, 5]

console.log(numberOfRoof(arr))

function numberOfRoof(arr) {
    let count = 0;
    let hight = 0;
    arr.forEach(it => {
        if (hight < it) {
            count++;
            hight = it;
        }
    })
    return count;
}

function numberOfPrimes(n) {
    let num = 1;
    let count = 0;
    if (n >= 2) {
        count++;
    }
    if (n >= 3) {
        count++;
    }

    while (num * 6 + 1 <= n) {
        if (isItPrime(num * 6 - 1)) {
            count++;
        }
        if (isItPrime(num * 6 + 1)) {
            count++;
        }
        num++;
    }

    if (num * 6 - 1 === n && isItPrime(num * 6 - 1)) {
        count++;
    }

    return count;
}

function isItPrime(num) {

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// arrow function
const numberOfPrimes1 = (n) => {

    // let num = 1;
    let count = 0;

    for (let i = 2; i <= n; i++) {
        if (isItPrime1(i)) {
            count++;
        }

    }
    return count;
}

// regular function
function isItPrime1(num) {

    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

console.log(isItPrime1(11))
console.log(numberOfPrimes1(5000))

console.warn(numberOfPrimes(5000))

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let val = arr[i];
        while (j >= 0 && arr[j] > val) {
            arr[j + 1] = arr[j];
            j--;
        }
        j++;
        arr[j] = val;
    }
}

const arr1 = [5, 4, 0, 1, 2, 6];
insertionSort(arr1)
console.log(arr1);

const sortStringArr = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let currValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].charCodeAt(0) >= currValue.charCodeAt(0)) {
            if (arr[j].charCodeAt(0) > currValue.charCodeAt(0) ||
                (arr[j].charCodeAt(0) === currValue.charCodeAt(0) &&
                    arr[j].charCodeAt(1) > currValue.charCodeAt(1))) {
                arr[j + 1] = arr[j];
            }
            j--;
        }
        arr[j + 1] = currValue;
    }
    return arr;
}

const sortStringArrUsingInbuildFun = (arr) => {

    for (let i = 1; i < arr.length; i++) {
        let currValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].localeCompare(currValue) == 1) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currValue;
    }
    return arr;
}

const strArr = ["AS", "KF", "ER", "DD", "JK"]
console.log(sortStringArrUsingInbuildFun([...strArr])); // shallow copy
console.log(strArr);
const sortedArr = sortStringArr([...strArr])
var res = "";
for (var i = 0; i < sortedArr.length; i++) {
    res += sortedArr[i] + " ";
}

console.log(res);




function sumOfProductOfDigits(n1, n2) {
    console.log(typeof n1);
    console.log(typeof n2);
    var sum = 0;
    while (n1 != 0 || n2 != 0) {

        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.trunc(n1 / 10);
        n2 = Math.trunc(n2 / 10);
    }
    return sum;
}

function sumOfProductOfDigitsClickHandler() {
    var n1 = document.getElementsByName("n1");
    var n2 = document.getElementsByName("n2");
    console.log(n1, n2);
    var result = sumOfProductOfDigits(n1, n2);
    document.getElementById("result").innerText = result;
}

console.log(sumOfProductOfDigits(3, 25));

// You need to return sorted array, not string
// arr: input array
// arrSize: size of array
// odd are in descending order and even are accending order
function sortEvenOdd(arr, arrSize) {
    const sortedArr = arr.sort((a, b) => {
        if (a % 2 === 0 && b % 2 === 0) {
            return a - b;
        }
        if (a % 2 != 0 && b % 2 != 0) {
            return b - a;
        }
        if (a % 2 != 0) {
            return -1
        }
        return 1;

    });
    console.log(sortedArr);
}

function sortEvenOdd1(arr, arrSize) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        while (left <= right && arr[left] % 2 != 0) {
            left++;
        }
        while (left <= right && arr[right] % 2 === 0) {
            right--;
        }

        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    // now sort from 0 to l in decending order AND from l+1 to arr.length in accending order
    // arr.sort(a,b) ;

}

let arr2 = [1, 5, 7, 8, 2, 4, -1, 0, -2, -5];
sortEvenOdd(arr2, arr2.length);

function quickSortImpl(left, right, arr) {

    if (left >= right) {
        return arr;
    }

    let pivot = getPivot(left, right, arr);
    quickSortImpl(left, pivot - 1, arr); // left part
    quickSortImpl(pivot + 1, right, arr); // right  part

    return arr;
}

function getPivot(left, right, arr) {

    let pivot = right;
    right = right - 1;

    while (left <= right) {

        if (arr[left] <= arr[pivot]) {
            left++;
        } else if (arr[right] >= arr[pivot]) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    [arr[left], arr[pivot]] = [arr[pivot], arr[left]];

    return left;
}


function quickSortClickHandler() {
    let arr3 = [5, 2, 1, 6, 0];
    console.log(quickSortImpl(0, arr3.length - 1, arr3));
}

