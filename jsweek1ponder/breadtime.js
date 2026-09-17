const flour = 500;
const water = 300;
let weight = flour + water;
console.log("weight: ", weight, "g");
document.getElementById("flourElement").textContent = flour;
document.getElementById("waterElement").textContent = water;
document.getElementById("doughElement").textContent = weight;