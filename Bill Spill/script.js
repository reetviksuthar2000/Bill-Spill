const bill = document.querySelector("#num_1");
const tip = document.querySelectorAll(".b1");
const people = document.querySelector(".p4");
const tip_display = document.querySelector(".tip_amount");
const total = document.querySelector(".total");
const increase = document.querySelector(".b7");
const decrease = document.querySelector(".b9");
const generate = document.querySelector(".b10");
const reset = document.querySelector(".b11");

let value = 0;
let peopleVal = 1;
let tipVal = 0;
// console.log(bill);

// increase and decrease button
peopleVal= parseInt(people.innerText = peopleVal);
document.querySelector(".b7").addEventListener('click', function () {
    peopleVal = peopleVal + 1;
    people.innerText = peopleVal;
})

document.querySelector('.b9').addEventListener('click', function () {
    peopleVal = --peopleVal;
    if(peopleVal < 0){
        peopleVal = 0;
    }
    people.innerText = peopleVal;
})


//add event listner
bill.addEventListener('input', (e) =>{
    value = parseFloat(e.traget.value);
    calculate();
    console.log(bill.value);
});

tip.forEach(btn => {
    btn.addEventListener('click',handleClick)
});

generate.addEventListener('click', generatefn)

reset.addEventListener('click' , handleReset)

//handle click function
function handleClick(event){
    tip.forEach(btn => {
        btn.classList.remove('active')
        if(event.target.innerHTML === btn.innerHTML){
            btn.classList.add('active');
            tipVal = parseFloat(btn.innerHTML)/100
        }
    })
    
    calculate()
}
// calculate funtion
function calculate() {
    if(peopleVal >= 1 ) {
        let tip = billVal * tipVal / peopleVal;
        let totalAmount = billVal * (tipVal + 1) / peopleVal;

        totalVal[0].innerHTML = '₹' + tip.toFixed(2);
        totalVal[1].innerHTML = '₹' + totalAmount.toFixed(2);
    }
}


 function generatefn () {
    
    calculate() ;
};

function handleReset(){
    people.innerText = '0' ;
    totalVal[0].innerHTML = '0';
    totalVal[1].innerHTML = '0';
}
