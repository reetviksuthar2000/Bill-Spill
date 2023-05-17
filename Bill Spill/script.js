const bill = document.querySelector("#num_1");
const tip = document.querySelectorAll(".b1");
const people = document.querySelector(".p4");
const tip_display = document.querySelector(".tip_amount");
const total = document.querySelector(".total");
const increase = document.querySelector(".b7");
const decrease = document.querySelector(".b9");
const generate = document.querySelector(".b10");
const reset = document.querySelector(".b11");

var value =0;
var number = 0;
var pecentage_tip = 0;
// console.log(bill);

bill.addEventListener("input", (e) => {
    value = parseInt(e.target.value);
    if (value < 0 || !Boolean(value)) {
      
      value = 0;
      
    } else {
      
      
      tipAmount();
      totalF();
      resetF();
    }
    console.log(bill.value);
  });

const tipAmount = () => {
    const tip_person = ((value * (percentage__tip / 100)) / number).toFixed(2);
    console.log(tip_person);
    tip__display.innerText = `₹{tip_person}`;
};
const totalF = () => {
    var total_person = (
      (value + value * (percentage__tip / 100)) /
      number
    ).toFixed(2);
    total.innerText = `₹{total_person}`;
};

