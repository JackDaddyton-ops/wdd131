//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const grades = ["A", "B", "c"];

function convertToPoints(grade) {
    const clearnGrade = grade.toUpperCase()
    switch (clearnGrade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        default:
            return 0;
    }
}

const gpaPoints = grades.map(convertToPoints);
console.log(gpaPoints);


const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
function testLength(item) {

    return item.length < 6 ? true : false
    if (item.length) {
        return true
    }
    else {
        return false
    }
}
shortFruit = fruit.filter(testLength);
console.log(shortFruit)