"use strict";
const aircoolers = [
  {
    id: 1,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 2,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 3,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 4,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 5,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 6,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 7,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 8,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 9,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
  {
    id: 10,
    size: "60-litres",
    power: "50-Watts ",
    dimension: "620 x 420 x 1115 mm",
  },
];

//addto cart-part
let arr = [];
var valElement = document.getElementById("val");
let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => {
  let inputValue = parseInt(valElement.value);
  aircoolers.map((element) => {
    if (element.id === inputValue && !(arr.includes(element))) {
      arr.push(element);
      valElement.value = "";
    }
  });
});

//remove-btn part
var removeElement = document.querySelector("#remove-btn");
removeElement.addEventListener("click", () => {
  let inputValue = parseInt(valElement.value);
  var index = arr.findIndex((val) => {
    return val.id == inputValue;
  });
   var elem = arr.at(index);
  arr = arr.filter(item => { 
    return item !== elem
  });
console.log(arr);
valElement.value = "";
});

//view-btn-part
var viewElement = document.querySelector("#view-btn");
viewElement.addEventListener("click", () => {
  console.log(arr);
});

let av = [ 1,2,33,4,5,6,8]
for (let a of  av){
  console.log(a);
}