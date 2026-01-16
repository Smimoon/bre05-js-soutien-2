let numbers = [10, 25, 5, 40, 18, 3];

function afficherGrandsNombres(table) {
    for(let number of table) {
        if(number > 15) {
            console.log(number);
        }
    }
}

afficherGrandsNombres(numbers);