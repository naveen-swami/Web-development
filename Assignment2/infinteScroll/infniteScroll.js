function atStarting() {
    for (let i = 0; i < 40; i++) {
        appendLine();
    }
}

//first way
function addTextAtScrollDown() {
    const textList = document.getElementById("scrolling");
    if (textList.scrollTop + textList.clientHeight > textList.scrollHeight - 5) {
        appendLine();
    }
}

//second way
window.addEventListener("scroll", () => {
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 5) {
        appendLine();
    }
});

function appendLine() {
    const text = "infinte scrolloing";
    const orderList = document.getElementById("scrolling-ordered-list");
    const liElement = document.createElement("LI");
    liElement.innerText = text;
    console.log(orderList);
    orderList.appendChild(liElement);
    // console.log(orderList.app);
}

atStarting();