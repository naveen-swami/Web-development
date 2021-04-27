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

    if (num * 6 - 1 === n && isItPrime(num*6 - 1)) {
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

    for(let i = 2; i <= n; i++) {
         if(isItPrime1(i)) {
             count++;
         }

    }
    return count;
}

function isItPrime1(num) {

    if (num <= 1) {
        return false;
    }
    if(num <= 3) {
        return true;
    } 

    if(num % 2 ===0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i = i +6) {
        if (num % i === 0 || num % (i+2) == 0) {
            return false;
        }
    }
    return true;
}

console.log(isItPrime1(11))
console.log(numberOfPrimes1(5000))

console.warn(numberOfPrimes(5000))