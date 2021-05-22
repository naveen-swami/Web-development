// it works when you have integer array
// Array.__proto__.includesOneof = (arr) => {
//     return this.some(item => arr.include(item));
// }



// here arrow function does not work
// here __proto__ does not work
Array.prototype.includesOneof = function (arr) {

    console.log(this);
    console.log(arr);
    if (arr.length === 0) {
        return false;
    }

    //    if(typeof obje[0] === Object)  => wrong way
    // we have to always insert into double colon 
    if (typeof arr[0] !== "object") {
        return arr.some(item => this.includes(item));
    } else { // for object and array we need to check there inside value
        for (let obj1 of arr) {
            if (this.some(obj2 => shallowCheck(obj1, obj2))) {
                return true;
            }
        }
    }
    return false;
}

function shallowCheck(obj1, obj2) {

    const key1 = Object.keys(obj1); // get keys of object 1
    const key2 = Object.keys(obj2); // get keys of object 2

    if (key1.length !== key2.length) {
        return false;
    }

    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}



let arr3 = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(arr3));
console.log(arr3.includesOneof([2, 8, 10])) //==>true
console.log(arr3.includesOneof([10, 11, 12])); //=>false
console.log(arr3.includesOneof([])); //=> Always false

const arr2 = [{
    name: "James Bond",
    code: "OO7"
}, {
    name: "Edward Donne",
    code: "OO1"
}];
console.log(Array.isArray(arr2));
console.log(arr2.includesOneof([{
    name: "James Bond",
    code: 'OO7'
}]));
console.log(arr2.includesOneof([{
    name: "James Bond",
    code: 'OO7',
    organization: 'MI6'
}])); //false

const allowImage = (ev) => {
    ev.preventDefault();
}

function onDragStartImage(ev) {
    event.dataTransfer.setData("Id", ev.target.id + "|" + ev.target.parentNode.id);
}

function onDropImage(ev) {
    // 

    const imgDivIdArr = ev.dataTransfer.getData("Id").split("|");
    const prevImgTag = document.getElementById(imgDivIdArr[0]);
    const prevDivTag = document.getElementById(imgDivIdArr[1]);
    const currDivTag = ev.target.parentNode;
    const currImgTag = currDivTag.childNodes[1];
    // prevDivTag.appendChild(ev.target);
    prevDivTag.innerHTML = "";
    prevDivTag.appendChild(ev.target);
    //    prevDivTag.replaceChild(ev.target, prevDivTag.childNodes[1]);


    //    console.log(ev.target);
    console.log(prevImgTag);
    //    currDivTag.appendChild(prevImgTag)
    console.log(currDivTag);
    console.log(currImgTag);
    currDivTag.innerHTML = "";
    currDivTag.appendChild(prevImgTag);
    //    currDivTag.replaceChild(prevImgTag, currDivTag.childNodes[0]);

}


// stop watch

class StopWatch {
    constructor() {
        this.intervalName = "";
        this.hour = "00";
        this.mintue = "00";
        this.second = "00";
        this.militSecond = 0;
    }

    setHour() {
        this.hour = Number(this.hour) + 1;
        this.hour = String(this.hour).padStart(2, 0);
    }
    setMintute() {
        this.mintue = Number(this.mintue) + 1;
        if (this.mintue === 60) {
            this.setHour();
            this.mintue = "00";
            return;
        }
        this.mintue = String(this.mintue).padStart(2, 0);
    }
    setSecond() {
        this.second = Number(this.second) + 1;
        if (this.second === 60) {
            this.setMintute();
            this.second = "00";
            return;
        }
        this.second = String(this.second).padStart(2, 0);
    }
    setMiliSecond() {
        console.log("count");
        this.militSecond = this.militSecond + 10;
        if (this.militSecond === 1000) {
            this.setSecond();
            this.militSecond = 0;
        }
    }

    clearWatch() {
        this.intervalName = "";
        this.hour = "00";
        this.mintue = "00";
        this.second = "00";
        this.militSecond = 0;
    }
}

const stopWatch = new StopWatch();

function displaySecond() {
    document.getElementById("second").innerHTML = stopWatch.second;
    if (stopWatch.second === "00") {
        displayMintue();
    }
}

function displayMintue() {
    document.getElementById("mintute").innerHTML = stopWatch.mintue;
    if (stopWatch.mintue === "00") {
        displayHour();
    }
}

function displayHour() {
    document.getElementById("hour").innerHTML = stopWatch.hour;
}

function startWatchClikHandler() {
    document.getElementById("stop").disabled = false;
    document.getElementById("pause").disabled = false;
    document.getElementById("start").disabled = true;
    stopWatch.intervalName = setInterval(() => {
        stopWatch.setMiliSecond();
        if (stopWatch.militSecond === 0) {
            displaySecond();
        }
    }, 10);

}

function stopWatchClickHander() {
    clearInterval(stopWatch.intervalName);
    stopWatch.clearWatch();
    displaySecond();
    defaultValues();
}

const defaultValues = () => {
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").innerText = "pause";
}

function pauseWatchClickHandler() {
    clearInterval(stopWatch.intervalName);
    let buttonText = document.getElementById("pause").innerText;
    if (buttonText === "continue") {
        startWatchClikHandler();
    }
    document.getElementById("pause").innerText = buttonText === "pause" ? "continue" : "pause";
}