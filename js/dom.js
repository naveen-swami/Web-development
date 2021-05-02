function swapTheme() {
    const appId = document.getElementById("appId");
    const swapId = document.getElementById("swapId");

    appId.className = appId.className === "day" ? "night" : "day";
    swapId.className = swapId.className === "button_day" ? "button_night" : "button_day";

}