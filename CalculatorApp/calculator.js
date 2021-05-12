class Calculator {
    constructor() {
        this.numList = []
        this.currNum = ""
        this.result = ""
        this.prevResult = ""
        this.operationList = []
        this.isLastKeyOperand = false;
    }

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divdie(num1, num2) {
        return num1 / num2;
    }

    setCurrNum(num) {
        this.currNum += num;
    }

    setOperation(operand) {
        this.isLastKeyOperand = true;
        this.operationList.push(operand);
        this.clearNumList();
    }

    replaceOperand(operand) {
        this.operationList.pop();
        this.operationList.push(operand);
    }

    clearNumList() {
        if (this.currNum !== "") {
            this.numList.push(this.currNum);
            this.currNum = "";
        }
    }

    clearCalculator() {
        this.numList = []
        this.currNum = ""
        this.result = ""
        this.prevResult = ""
        this.operationList = []
    }
}

// it is singn object
const signObject = {
    DIVIDE: '÷',
    MULTIPLY: 'x',
    SUBTRACT: '-',
    ADD: '+'
}

const calculator = new Calculator();

const actionClickHandler = (action) => {
    switch (action) {
        case 'CLEAR_ALL':
            calculator.clearCalculator();
            updateMainDisplay();
            updateSecondaryDisplay();
            break;
        default:
            break;
    }
}

function updateMainDisplay() {
    const mainDisplay = document.getElementById("main-display");
    mainDisplay.innerHTML = calculator.currNum || 0;
}

function updateSecondaryDisplay() {
    const secondaryDisplay = document.getElementById("secondary-display");
    const newNumList = [...calculator.numList];
    const newOperationList = [...calculator.operationList];
    let innerHTML = "";
    while (newNumList.length !== 0) {
        const num = newNumList.shift();
        const operand = newOperationList.shift();
        innerHTML += `${num} <span class="operand"> ${operand ? signObject[operand] : ""} </span>`
    }
    secondaryDisplay.innerHTML = innerHTML;
}

function operandKeyClickHandler(operand) {

    if (calculator.isLastKeyOperand) {
        calculator.replaceOperand(operand);
    } else {
        calculator.setOperation(operand);
    }

    updateMainDisplay();
    updateSecondaryDisplay();

    // const operationDoucment = document.getElementById("secondary-display");
    // const resultDoucment = document.getElementById("main-display");
    // let currNum = calculator.currNum;
    // // console.log();
    // if (currNum.length > 0 && currNum.indexOf(currNum.length - 1) in signObject) {
    //     calculator.currNum = currNum.split(0, currNum.length - 1);
    //     calculator.operationList.pop();
    // }
    // currNum = currNum + calculator.result + signObject[operand];
    // calculator.currNum = currNum;
    // if (calculator.operationList.length === 1) {
    //     const num1 = calculator.numList.shift();
    //     const num2 = calculator.numList.shift();
    //     const lastOperand = calculator.operationList.pop();
    //     calculator.prevResult = this.calculation(num1, num2, lastOperand);
    //     calculator.numList.push(calculator.prevResult);
    // }
    // calculator.numList.push(Number(calculator.result));
    // calculator.operationList.push(operand);
    // operationDoucment.innerText = currNum;
    // calculator.result = '';
    // resultDoucment.innerText = 0;
}

function calculation(num1, num2, operand) {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operand) {
        case 'DIVIDE':
            return calculator.divdie(num1, num2);
        case 'MULTIPLY':
            return calculator.multiply(num1, num2);
        case 'ADD':
            return calculator.add(num1, num2);
        case 'SUBTRACT':
            return calculator.subtract(num1, num2);
        default:
            break;
    }
}

function numKeyClickHandler(num) {
    // const resultDoucment = document.getElementById("main-display");
    calculator.isLastKeyOperand = false;
    calculator.setCurrNum(num);
    updateMainDisplay();
    updateSecondaryDisplay();
    // calculator.result = calculator.result + num;
    // resultDoucment.innerText = calculator.result;
}

function undoClickHandler() {

}

function resultClickHandler() {
    calculator.clearNumList();
    const newNumList = [...calculator.numList];
    let newOperationList = [...calculator.operationList];
    if (newNumList.length === newOperationList.length) {
        calculator.operationList.pop();
        newOperationList.pop();
    }
    while (newNumList.length !== 1) {
        const num1 = newNumList.shift();
        const num2 = newNumList.shift();
        const operand = newOperationList.shift();
        newNumList.unshift(calculation(num1, num2, operand));
    }

    // calculator.currNum = newNumList[0];
    updateSecondaryDisplay();
    document.getElementById("main-display").innerHTML = newNumList[0];
    // updateSecondaryDisplay();
    // updateMainDisplay();

    // const operationDoucment = document.getElementById("secondary-display");
    // const resultDoucment = document.getElementById("main-display");
    // let currNum = calculator.currNum;
    // currNum = currNum + calculator.result;
    // if (calculator.numList.length === 2) {
    //     const num1 = calculator.numList.shift();
    //     const num2 = calculator.numList.shift();
    //     const lastOperand = calculator.operationList.pop();
    //     calculator.prevResult = this.calculation(num1, num2, lastOperand);
    //     calculator.numList.push(calculator.prevResult);
    // } else {
    //     const num1 = calculator.numList.shift();
    //     const num2 = calculator.result;
    //     const lastOperand = calculator.operationList.pop();
    //     calculator.prevResult = this.calculation(num1, num2, lastOperand);
    //     calculator.numList.push(calculator.prevResult);
    // }
    // // calculator.numList.push(Number(calculator.result));
    // //  calculator.operationList.push(operand);
    // operationDoucment.innerText = currNum;
    // calculator.currNum = currNum;
    // calculator.result = '';
    // resultDoucment.innerText = calculator.numList[0];
}