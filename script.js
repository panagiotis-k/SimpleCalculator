const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".numberButton");
const operateButtons = document.querySelectorAll(".operateButton")
const allClear = document.querySelector(".allclear")
const equal = document.querySelector("#equal");
const backspace = document.querySelector(".backspace")

display.value = "";

numberButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
       display.value += btn.value;
    })
})

operateButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        display.value += btn.value; 
    })
})

allClear.addEventListener("click",()=>{
    display.value = "";
    display.style.color = "black"
})

equal.addEventListener("click",()=>{
    try{
        if(display.value){
            if(eval(display.value) === Infinity){
                display.style.color = "red";
            }
            display.value = eval(display.value);
        }   
    }
    catch(e){
        display.style.color = "red"
        display.value = "ERROR.."
    }
})

backspace.addEventListener("click",()=>{
    display.value = display.value.slice(0,-1)
})



