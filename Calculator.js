let calculator_input_Number_V = document.getElementById('calculator_input_Number');
let calculator_input_Number_Previews_V = document.getElementById('calculator_input_Number_Previews');

let Calculator_input_AC_V = document.getElementById('Calculator_input_AC');

let backBtn = document.getElementById("backBtn");

let DisplayValue;

function display(DisplayValue){
    calculator_input_Number_V.value+=DisplayValue;
}

Calculator_input_AC_V.addEventListener('click',()=>{
    calculator_input_Number_V.value="";
    calculator_input_Number_Previews_V.value="";
})

backBtn.addEventListener('click',() => {
    calculator_input_Number_V.value = calculator_input_Number_V.value.slice(0,-1);
})

function displaySolve(){

    let eq = calculator_input_Number_V.value;

    calculator_input_Number_Previews_V.value=eq;

    try {
      let result = eval(eq);
      if (isNaN(result) || !isFinite(result)) {
        calculator_input_Number_V.value = "Invalid Expression";
      } else {
        calculator_input_Number_V.value = result;
      }
    } catch (error) {
      calculator_input_Number_V.value = "Invalid Expression";
    }

}