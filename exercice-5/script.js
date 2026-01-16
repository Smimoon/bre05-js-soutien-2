function calculerPrixTTC(prixHT) {
    return(prixHT*1.20);
}

let prixFinal = calculerPrixTTC(50);

console.log(prixFinal);