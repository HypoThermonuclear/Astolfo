/*
To-do:
- Achievements (buy 10x thigh highs, buy 25x thigh highs)?
*/

// Get elements related to money
const moneyPlaceholder = document.getElementById("player-money");
const moneyPerSecondPlaceholder = document.getElementById("money-per-second");
const moneyPerClickPlaceholder = document.getElementById("money-per-click");

// Get elements related to passive purchases
const thighHighsAmountText = document.getElementById("thighHighsQuantity");
const thighHighsCostText = document.getElementById("thighHighsCost");
const shirtAmountText = document.getElementById("shirtQuantity");
const shirtCostText = document.getElementById("shirtCost");
const bootsAmountText = document.getElementById("bootsQuantity");
const bootsCostText = document.getElementById("bootsCost");
const pinkNecktieAmountText = document.getElementById("pinkNecktieQuantity");
const pinkNecktieCostText = document.getElementById("pinkNecktieCost");
const blackBowAmountText = document.getElementById("blackBowQuantity");
const blackBowCostText = document.getElementById("blackBowCost");
const pinkSkirtAmountText = document.getElementById("pinkSkirtQuantity");
const pinkSkirtCostText = document.getElementById("pinkSkirtCost");

// Get elements related to active purchases
const makeEyeContactAmountText = document.getElementById("makeEyeContactQuantity");
const makeEyeContactCostText = document.getElementById("makeEyeContactCost");
const smileAmountText = document.getElementById("smileQuantity");
const smileCostText = document.getElementById("smileCost");
const waveAmountText = document.getElementById("waveQuantity");
const waveCostText = document.getElementById("waveCost");
const approachAmountText = document.getElementById("approachQuantity");
const approachCostText = document.getElementById("approachCost");
const cuddleAmountText = document.getElementById("cuddleQuantity");
const cuddleCostText = document.getElementById("cuddleCost");
const kissAmountText = document.getElementById("kissQuantity");
const kissCostText = document.getElementById("kissCost");

// Get Buttons
const shopButton = document.getElementById("shop-button");
const statsButton = document.getElementById("stats-button");
const settingsButton = document.getElementById("settings-button");

// Main Displays
const columnHeaderText = document.getElementById("column-header");
const shopDisplay = document.getElementById("shop");
const statsDisplay = document.getElementById("stats");
const settingsDisplay = document.getElementById("settings");

// Set the variables related to money
let money = 0;
let moneyPerSecond = 0;
let moneyPerClick = 1;

// Set the variables related to passive purchases
let thighHighs = 0;
let thighHighsPrice = 25;
let shirt = 0;
let shirtPrice = 80;
let boots = 0;
let bootsPrice = 200;
let pinkNecktie = 0;
let pinkNecktiePrice = 700;
let blackBow = 0;
let blackBowPrice = 2500;
let pinkSkirt = 0;
let pinkSkirtPrice = 15000;

// Set the variables related to active purchases
let makeEyeContact = 0;
let makeEyeContactPrice = 25;
let smile = 0;
let smilePrice = 80;
let wave = 0;
let wavePrice = 200;
let approach = 0;
let approachPrice = 700;
let cuddle = 0;
let cuddlePrice = 2500;
let kiss = 0;
let kissPrice = 15000;

// List of things to do when the money counter is updated
function updateMoneyCounter() {
    moneyPlaceholder.innerText = `Money: ${money.toFixed(2)}$`;
}

// List of things to do when the money per second counter is updated
function updateMoneyPerSecondCounter() {
    moneyPerSecondPlaceholder.innerText = `${moneyPerSecond.toFixed(2)}$/s`;
    moneyPerSecondPlaceholder.classList.add("click-animation");
}

// List of things to do when the money per click counter is updated
function updateMoneyPerClickCounter() {
    moneyPerClickPlaceholder.innerText = `${moneyPerClick.toFixed(2)}$/click`;
    moneyPerClickPlaceholder.classList.add("click-animation");
}

// List of things to do when player wants to save progress to localstorage
function saveProgress() {
    localStorage.setItem("localMoney", money);
    localStorage.setItem("localMoneyPerSecond", moneyPerSecond);
    localStorage.setItem("localMoneyPerClick", moneyPerClick);
    localStorage.setItem("localThighHighs", thighHighs);
    localStorage.setItem("localShirt", shirt);
    localStorage.setItem("localBoots", boots);
    localStorage.setItem("localPinkNecktie", pinkNecktie);
    localStorage.setItem("localBlackBow", blackBow);
    localStorage.setItem("localPinkSkirt", pinkSkirt);
    localStorage.setItem("localMakeEyeContact", makeEyeContact);
    localStorage.setItem("localSmile", smile);
    localStorage.setItem("localWave", wave);
    localStorage.setItem("localApproach", approach);
    localStorage.setItem("localCuddle", cuddle);
    localStorage.setItem("localKiss", kiss);
}

// List of things to do when player wants to load progress from localstorage
function loadProgress() {
    resetProgress();

    money = parseFloat(localStorage.getItem("localMoney") || "0");
    moneyPerSecond = parseFloat(localStorage.getItem("localMoneyPerSecond") || "0");
    thighHighs = parseFloat(localStorage.getItem("localThighHighs") || "0");
    shirt = parseFloat(localStorage.getItem("localShirt") || "0");
    boots = parseFloat(localStorage.getItem("localBoots") || "0");
    pinkNecktie = parseFloat(localStorage.getItem("localPinkNectie") || "0");
    blackBow = parseFloat(localStorage.getItem("localBlackBow") || "0");
    makeEyeContact = parseFloat(localStorage.getItem("localMakeEyeContact") || "0");
    smile = parseFloat(localStorage.getItem("localSmile") || "0");
    wave = parseFloat(localStorage.getItem("localWave") || "0");
    approach = parseFloat(localStorage.getItem("localApproach") || "0");
    cuddle = parseFloat(localStorage.getItem("localCuddle") || "0");
    kiss = parseFloat(localStorage.getItem("localKiss") || "0");

    moneyPerClick += 0.4 * makeEyeContact;
    moneyPerClick += 1.3 * smile;
    moneyPerClick += 3.2 * wave;
    moneyPerClick += 11 * approach;
    moneyPerClick += 45 * cuddle;
    moneyPerClick += 260 * kiss;

    moneyPlaceholder.classList.add("click-animation");
    
    updateMoneyCounter();
    updateMoneyPerSecondCounter();
    updateMoneyPerClickCounter();
}

// List of things to do when player wants to reset current progress
function resetProgress() {
    money = 0;
    moneyPerSecond = 0;
    moneyPerClick = 1;

    thighHighs = 0;
    shirt = 0;
    boots = 0;
    pinkNecktie = 0;
    blackBow = 0;
    pinkSkirt = 0;

    makeEyeContact = 0;
    smile = 0;
    wave = 0;
    approach = 0;
    cuddle = 0;
    kiss = 0;

    updateMoneyPerSecondCounter();
    updateMoneyPerClickCounter();

    thighHighsAmountText.innerText = `Quantity: 0`;
    thighHighsCostText.innerText = `Price: 25$`
    thighHighsPrice = 25;
    shirtAmountText.innerText = `Quantity: 0`;
    shirtCostText.innerText = `Price: 80$`
    shirtPrice = 80;
    bootsAmountText.innerText = `Quantity: 0`;
    bootsCostText.innerText = `Price: 200$`
    bootsPrice = 200;
    pinkNecktieAmountText.innerText = `Quantity: 0`;
    pinkNecktieCostText.innerText = `Price: 700$`
    pinkNecktiePrice = 700;
    blackBowAmountText.innerText = `Quantity: 0`;
    blackBowCostText.innerText = `Price: 2500$`
    blackBowPrice = 2500;
    pinkSkirtAmountText.innerText = `Quantity: 0`;
    pinkSkirtCostText.innerText = `Price: 15000$`
    pinkSkirtPrice = 15000;

    makeEyeContactAmountText.innerText = `Quantity: 0`;
    makeEyeContactCostText.innerText = `Price: 25$`;
    smileAmountText.innerText = `Quantity: 0`;
    smileCostText.innerText = `Price: 80$`
    smilePrice = 80;
    waveAmountText.innerText = `Quantity: 0`;
    waveCostText.innerText = `Price: 200$`
    wavePrice = 200;
    approachAmountText.innerText = `Quantity: 0`;
    approachCostText.innerText = `Price: 700$`
    approachPrice = 700;
    cuddleAmountText.innerText = `Quantity: 0`;
    cuddleCostText.innerText = `Price: 2500$`
    cuddlePrice = 2500;
    kissAmountText.innerText = `Quantity: 0`;
    kissCostText.innerText = `Price: 15000$`
    kissPrice = 15000;

    moneyPlaceholder.classList.add("click-animation");
}

// Set the money per second
function timer() {
    money += 0.5 * thighHighs/100;
    money += 1.6 * shirt/100;
    money += 4 * boots/100;
    money += 14 * pinkNecktie/100;
    money += 50 * blackBow/100;
    money += 300 * pinkSkirt/100;

    moneyPlaceholder.classList.remove("click-animation");
    moneyPerSecondPlaceholder.classList.remove("click-animation");
    moneyPerClickPlaceholder.classList.remove("click-animation");

    updateMoneyCounter();
}

// Set the money per click
function clicked() {
    money++;
    money += 0.4 * makeEyeContact;
    money += 1.3 * smile;
    money += 3.2 * wave;
    money += 11 * approach;
    money += 45 * cuddle;
    money += 260 * kiss;

    updateMoneyCounter();
}

function pointerDown() {
    moneyPlaceholder.classList.add("click-animation");
}

function pointerUp() {
    moneyPlaceholder.classList.remove("click-animation");
}

// List of things to do when player doesnt have enough money for a certain thing
function notEnoughMoney() {
    console.log('not enough money')
}

/* _____ _             _ 
  /__   (_) ___ _ __  / |
    / /\/ |/ _ \ '__| | |
   / /  | |  __/ |    | |
   \/   |_|\___|_|    |_|*/
// Thigh Highs
function purchaseThighHighs() {
    if (money < thighHighsPrice) {
        notEnoughMoney();
        return;
    }

    money -= thighHighsPrice;
    moneyPerSecond += 0.5;

    thighHighs += 1;
    thighHighsPrice += (0.1 * thighHighsPrice);

    thighHighsAmountText.innerText = `Quantity: ${thighHighs} (${(0.5 * thighHighs).toFixed(2)}$/s)`;
    thighHighsCostText.innerText = `Price: ${Math.round(thighHighsPrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Make Eye Contact
function purchaseMakeEyeContact() {
    if (money < makeEyeContactPrice) {
        notEnoughMoney();
        return;
    }

    money -= makeEyeContactPrice;
    moneyPerClick += 0.4;

    makeEyeContact += 1;
    makeEyeContactPrice += (0.1 * makeEyeContactPrice);

    makeEyeContactAmountText.innerText = `Quantity: ${makeEyeContact} (${(0.4 * makeEyeContact).toFixed(2)}$/click)`;
    makeEyeContactCostText.innerText = `Price: ${Math.round(makeEyeContactPrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}
/* _____ _             ____  
  /__   (_) ___ _ __  |___ \ 
    / /\/ |/ _ \ '__|   __) |
   / /  | |  __/ |     / __/ 
   \/   |_|\___|_|    |_____|*/
// Shirt
function purchaseShirt() {
    if (money < shirtPrice) {
        notEnoughMoney();
        return;
    }

    money -= shirtPrice;
    moneyPerSecond += 2;

    shirt += 1;
    shirtPrice += (0.1 * shirtPrice);

    shirtAmountText.innerText = `Quantity: ${shirt} (${(1.6 * shirt).toFixed(2)}$/s)`;
    shirtCostText.innerText = `Price: ${Math.round(shirtPrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Smile at Astolfo
function purchaseSmile() {
    if (money < smilePrice) {
        notEnoughMoney();
        return;
    }

    money -= smilePrice;
    moneyPerClick += 1.3;

    smile += 1;
    smilePrice += (0.1 * smilePrice);

    smileAmountText.innerText = `Quantity: ${smile} (${(1.3 * smile).toFixed(2)}$/click)`;
    smileCostText.innerText = `Price: ${Math.round(smilePrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}
/* _____ _             _____ 
  /__   (_) ___ _ __  |___ / 
    / /\/ |/ _ \ '__|   |_ \ 
   / /  | |  __/ |     ___) |
   \/   |_|\___|_|    |____/ */
// Boots
function purchaseBoots() {
    if (money < bootsPrice) {
        notEnoughMoney();
        return;
    }

    money -= bootsPrice;
    moneyPerSecond += 6;

    boots += 1;
    bootsPrice += (0.1 * bootsPrice);

    bootsAmountText.innerText = `Quantity: ${boots} (${(4 * boots).toFixed(2)}$/s)`;
    bootsCostText.innerText = `Price: ${Math.round(bootsPrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Wave at Astolfo
function purchaseWave() {
    if (money < wavePrice) {
        notEnoughMoney();
        return;
    }

    money -= wavePrice;
    moneyPerClick += 3.2;

    wave += 1;
    wavePrice += (0.1 * wavePrice);

    waveAmountText.innerText = `Quantity: ${wave} (${(3.2 * wave).toFixed(2)}$/click)`;
    waveCostText.innerText = `Price: ${Math.round(wavePrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}
/* _____ _             _  _   
  /__   (_) ___ _ __  | || |  
    / /\/ |/ _ \ '__| | || |_ 
   / /  | |  __/ |    |__   _|
   \/   |_|\___|_|       |_|  */
// Pink Necktie
function purchasePinkNecktie() {
    if (money < pinkNecktiePrice) {
        notEnoughMoney();
        return;
    }

    money -= pinkNecktiePrice;
    moneyPerSecond += 25;

    pinkNecktie += 1;
    pinkNecktiePrice += (0.1 * pinkNecktiePrice);

    pinkNecktieAmountText.innerText = `Quantity: ${pinkNecktie} (${(14 * pinkNecktie).toFixed(2)}$/s)`;
    pinkNecktieCostText.innerText = `Price: ${Math.round(pinkNecktiePrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Approach Astolfo
function purchaseApproach() {
    if (money < approachPrice) {
        notEnoughMoney();
        return;
    }

    money -= approachPrice;
    moneyPerClick += 11;

    approach += 1;
    approachPrice += (0.1 * approachPrice);

    approachAmountText.innerText = `Quantity: ${approach} (${(11 * approach).toFixed(2)}$/click)`;
    approachCostText.innerText = `Price: ${Math.round(approachPrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}
/* _____ _             ____  
  /__   (_) ___ _ __  | ___| 
    / /\/ |/ _ \ '__| |___ \ 
   / /  | |  __/ |     ___) |
   \/   |_|\___|_|    |____/ */
// Black Bow
function purchaseBlackBow() {
    if (money < blackBowPrice) {
        notEnoughMoney();
        return;
    }

    money -= blackBowPrice;
    moneyPerSecond += 120;

    blackBow += 1;
    blackBowPrice += (0.1 * blackBowPrice);

    blackBowAmountText.innerText = `Quantity: ${blackBow} (${(50 * blackBow).toFixed(2)}$/s)`;
    blackBowCostText.innerText = `Price: ${Math.round(blackBowPrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Cuddle Astolfo
function purchaseCuddle() {
    if (money < cuddlePrice) {
        notEnoughMoney();
        return;
    }

    money -= cuddlePrice;
    moneyPerClick += 45;

    cuddle += 1;
    cuddlePrice += (0.1 * cuddlePrice);

    cuddleAmountText.innerText = `Quantity: ${cuddle} (${(45 * cuddle).toFixed(2)}$/click)`;
    cuddleCostText.innerText = `Price: ${Math.round(cuddlePrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}

/* _____ _              __   
  /__   (_) ___ _ __   / /_  
    / /\/ |/ _ \ '__| | '_ \ 
   / /  | |  __/ |    | (_) |
   \/   |_|\___|_|     \___/ */
// Pink Skirt
function purchasePinkSkirt() {
    if (money < pinkSkirtPrice) {
        notEnoughMoney();
        return;
    }

    money -= pinkSkirtPrice;
    moneyPerSecond += 800;

    pinkSkirt += 1;
    pinkSkirtPrice += (0.1 * pinkSkirtPrice);

    pinkSkirtAmountText.innerText = `Quantity: ${pinkSkirt} (${(300 * pinkSkirt).toFixed(2)}$/s)`;
    pinkSkirtCostText.innerText = `Price: ${Math.round(pinkSkirtPrice.toFixed(2))}$`

    updateMoneyCounter();
    updateMoneyPerSecondCounter();
}
// Kiss Astolfo
function purchaseKiss() {
    if (money < kissPrice) {
        notEnoughMoney();
        return;
    }

    money -= kissPrice;
    moneyPerClick += 260;

    kiss += 1;
    kissPrice += (0.1 * kissPrice);

    kissAmountText.innerText = `Quantity: ${kiss} (${(260 * kiss).toFixed(2)}$/click)`;
    kissCostText.innerText = `Price: ${Math.round(kissPrice.toFixed(2))}$`

    updateMoneyPerClickCounter();
}

// List of things to do when the window is loaded
window.onload = function() {
    setInterval(timer, 10);
}

function switchToActive() {
    document.getElementById("passive-shop").style.display = "none";
    document.getElementById("active-shop").style.display = "flex";
}

function switchToPassive() {
    document.getElementById("passive-shop").style.display = "flex";
    document.getElementById("active-shop").style.display = "none";
}

function switchToShop() {
    columnHeaderText.textContent = "Shop";
    shopDisplay.style.display = "block";
    statsDisplay.style.display = "none";
    settingsDisplay.style.display = "none";
}

function switchToStats() {
    columnHeaderText.textContent = "Stats";
    shopDisplay.style.display = "none";
    statsDisplay.style.display = "block";
    settingsDisplay.style.display = "none";
}

function switchToSettings() {
    columnHeaderText.textContent = "Settings";
    shopDisplay.style.display = "none";
    statsDisplay.style.display = "none";
    settingsDisplay.style.display = "block";
}