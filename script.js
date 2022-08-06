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
let ab;
let arr = [];
let c;
var valElement = document.getElementById("val");
let addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", () => {
  let inputValue = parseInt(valElement.value);

  if (inputValue < 10) {
    console.log("Input value : ", inputValue);
    c = inputValue - 1;
    //   console.log(c,"c");
    // console.log(inputValue,'value');
    var b = aircoolers[c].id;
    // console.log(b,'index');
    // if (inputValue == b) {
    ab = aircoolers[c];
    if (!arr.includes(ab)) {
      arr.push(ab);
      valElement.value = "";
    }
    // }
  }
});

//remove-btn part
var removeElement = document.querySelector("#remove-btn");
removeElement.addEventListener("click", () => {
  let inputValue = parseInt(valElement.value);
  console.log(inputValue);
  if (inputValue < 10) {
  
    var removeEle = arr.findIndex((arrValue) => {
      // console.log(arrValue);
   return arrValue.id == inputValue;
      // console.log(data);
    });
   //  if(arr.includes(removeEle)){
    console.log(removeEle);
    arr.splice(removeEle, 1);
    console.log(arr);
    valElement.value = "";
   //  }
  }
});

//view-btn-part
var viewElement = document.querySelector("#view-btn");
viewElement.addEventListener("click", () => {
  console.log(arr);
});
