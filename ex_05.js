let firstname = "";
let lastname = "";
let cardCode = "";
let expiryDateMonth = 0;
let expiryDateYear = 0;

let computedBankInfo = `${firstname},${lastname},${cardCode},${expiryDateMonth}/${expiryDateYear}`;

function displayInCard(text) {
    console.log("Affichage dans la carte: " + text);
}

displayInCard(computedBankInfo);

console.log("Ça marche !");
