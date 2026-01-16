function estAdulte(age) {
    if(age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

function formaterMessage(age) {
    if(estAdulte(age) === true) {
        console.log(`Accès autorisé.`);
    }
    else {
        console.log(`Accès interdit.`);
    }
}

formaterMessage(42);

formaterMessage(14);