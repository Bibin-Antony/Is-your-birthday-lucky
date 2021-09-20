const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");


checkButton.addEventListener("click", checkIfLucky);

function checkIfLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateNumbers(dob);
    console.log(sum);
    
}
function calculateNumbers(dob){
    dob =  dob.replaceAll("-", "");
    console.log(dob);
    let sum = 0;
    for(let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
}

