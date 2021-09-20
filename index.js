const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const resultBox = document.querySelector("#result-output-box");
 
checkButton.addEventListener("click", checkIfLucky);

function checkIfLucky(){
    const birthDate = dateOfBirth.value;
    const  sum = calculateNumbers(birthDate);  
    birthdaycalc(sumNew);
    
}
function calculateNumbers(birthDate){
    birthDate =  birthDate.replaceAll("-", "");
    let sum = 0;
    for(let index = 0; index <= birthDate.length; ++index){
        sum = sum + Number(birthDate.charAt(index));
    }
    console.log(sum, luckyNumber.value);
    sumNew = sum % Number(luckyNumber.value);
     return sum, sumNew;   
     
}


function birthdaycalc(sumNew){
    console.log(sumNew);
    if(sumNew == 0){
        resultBox.innerText("Congragulations, Your bithday is lucky! 🎉🥳")
    }else{
        resultBox.innerText("Sorry, Your Birthday isn't lucky! 😞")
    }
}
