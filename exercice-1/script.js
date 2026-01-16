let notes = [12, 15, 8, 19, 10];
let sum = 0;

for (let note of notes) {
    sum = sum + note;
}

let average = sum/notes.length;
console.log(`La moyenne est de ${average}`);