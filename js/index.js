let arr = [1, 2, 3, 4, 5]

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

// arrow function
const numberOfPrimes = (n) => {

    let num = 1;
    let count = 0;
    if (n >= 2) {
        count++;
    }
    if (n >= 3) {
        count++;
    }

    while (num * 6 + 1 <= n) {
            if(isItPrime(num*6-1)){
                count++;
            } 
            if(isItPrime(num*6+1)){
                count++;
            }
        num++;
    }

    if (num * 6 - 1 === n) {
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

console.log(isItPrime(2))
console.log(numberOfPrimes(5003))