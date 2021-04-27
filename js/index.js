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