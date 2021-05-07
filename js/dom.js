function swapTheme() {
    const appId = document.getElementById("appId");
    const swapId = document.getElementById("swapId");

    appId.className = appId.className === "day" ? "night" : "day";
    swapId.className = swapId.className === "button_day" ? "button_night" : "button_day";

}

function toggleVisibility() {
    const useLessId = document.getElementById("useless-paragraph");
    useLessId.style.visibility =
        useLessId.style.visibility === "hidden" ? "visible" : "hidden"
}

let incrementClickHandler = () => {
    let counterId = document.getElementById("counter");
    let count = Number(counterId.innerText) + 1;
    counterId.innerText = count;
}

function decrementClickHandler() {
    let counterId = document.getElementById("counter");
    let count = Number(counterId.innerText);
    if (count > 0) {
        counterId.innerText = count - 1;
    }
}

function totalPrice() {
    const priceNodeList = document.querySelectorAll("[data-ns-test]");
    let sum = 0;
    for (var i = 0; i < priceNodeList.length; i++) {
        sum += parseInt(priceNodeList[i].innerText);
    }

    const table = document.getElementById("tableContainer");
    const tableRow = document.createElement("TR");

    // first way

    // const cell = tableRow.insertCell(0);
    // cell.setAttribute("data-ns-test", "grandTotal");
    // cell.innerHTML = `Total Price = 
    //    ${sum}
    // `;

    // second way
    tableRow.innerHTML = `
        <td></td>
        <td>Total Price</td>
        <td data-ns-test = "grandTotal"> ${sum} 
    `;

    table.appendChild(tableRow);
}

totalPrice();

function grandTotal() {

    let sum = 0;
    console.log(document.querySelectorAll("td"));
    document.querySelectorAll("td").forEach(it => {
        console.log(it.getAttribute("data-ns-test"));
        if (it.getAttribute("data-ns-test") === "price") {
            sum += Number(it.innerText);
            console.log(sum);
        }
    });

    var totalPriceRow = document.createElement("tr");
    var totalPriceCol = document.createElement("td");
    var totalPriceCol1 = document.createElement("td");
    var totalPriceCol2 = document.createElement("td");
    totalPriceRow.appendChild(totalPriceCol);
    var textForTotalPriceCol1 = document.createTextNode("price");
    totalPriceCol1.appendChild(textForTotalPriceCol1);
    totalPriceRow.appendChild(totalPriceCol1);
    var attribute = document.createAttribute("data-ns-test");
    attribute.value = "grandTotal";
    const text = document.createTextNode(sum);
    totalPriceCol2.setAttributeNode(attribute);
    totalPriceCol2.appendChild(text);
    totalPriceRow.appendChild(totalPriceCol2);
    console.log(totalPriceRow);
    document.getElementById("tableContainer").appendChild(totalPriceRow);

}

function totalGroceryListPriceClickHandler(event) {
    const title = document.getElementById("item-name-input");
    const price = document.getElementById("item-price-input");
    if(title.value === "" || price.value === ""){
        price.value = "";
        title.value= "";
        return;
    }
 
     let table = document.getElementById("groceryListTable");
 
     let qty = table.rows.length;
 
     // create table row
     let row = table.insertRow();
     let cell1 = row.insertCell(0);
     cell1.innerText = qty;
     let cell2 = row.insertCell(1);
     cell2.setAttribute("data-ns-test", "item-name");
     cell2.innerText = title.value;
     let cell3 = row.insertCell(2);
     cell3.setAttribute("data-ns-test", "item-price")
     cell3.setAttribute("class", "itemPrice");
     cell3.innerText = parseInt(price.value);
     const totalAmount = document.getElementById("totalAmount");
     totalAmount.innerText = Number(totalAmount.innerText) + Number(price.value);
     price.value = "";
     title.value = "";

}