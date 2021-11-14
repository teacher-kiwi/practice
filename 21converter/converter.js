const exchangeBtn = document.querySelector("#exchange");

const sValue = document.querySelector("#s-value"),
    tValue = document.querySelector("#t-value");

let changed = true;

const exchange = () => {
    const sUnit = document.querySelector("#s-unit"),
        tUnit = document.querySelector("#t-unit");
    const currentSValue = sValue.value,
        currentTValue = tValue.value;
    if (changed === true) {
        changed = false;
        sUnit.innerText = "℉";
        tUnit.innerText = "℃";
    } else {
        changed = true;
        sUnit.innerText = "℃";
        tUnit.innerText = "℉";
    }
    sValue.value = currentTValue;
    tValue.value = currentSValue;
}

const convert = (e) => {
    if(changed === true && e.target.id === "s-value"){
        tValue.value = sValue.value * 1.8 + 32;
    } else if(changed === false && e.target.id === "t-value"){
        sValue.value = tValue.value * 1.8 + 32;
    } else if(changed === true && e.target.id === "t-value"){
        sValue.value = (tValue.value - 32) / 1.8;
    } else if(changed === false && e.target.id === "s-value"){
        tValue.value = (sValue.value - 32) / 1.8;
    }
}

exchangeBtn.onclick = exchange;
sValue.onchange = convert;
tValue.onchange = convert;