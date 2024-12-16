let inputNumber = document.getElementById("number");
let inputSign = document.getElementById("sign");

let firstNumber = "";
let secondNumber = "";
let currentSign = '';

function addNumber(n)
{
    // this function works by adding numbers together as a string
    // until mathematical operation button is pressed (+, -, /, *)
    // when it is pressed, input of second number will begin.
    if(currentSign == '')
    {
        if(firstNumber.length <= 6)
        {
            firstNumber += n;
            inputNumber.value = firstNumber;
        }
        else
        {
            alert("Number can't have more than 7 digits");
        }
    }
    else
    {
        if(secondNumber.length <= 6)
        {
            secondNumber += n;
            inputNumber.value = secondNumber;
        }
        else
        {
            alert("Number can't have more than 7 digits");
        }
    }
}

function resetCalculator()
{
    firstNumber = "";
    secondNumber = "";
    currentSign = '';
    
    inputNumber.value = "";
    inputSign.innerHTML = '';

    // reseting all the values
}

function calculateResult()
{
    switch(currentSign)
    {
        case '+':
            inputNumber.value = addTwoNumbers(firstNumber, secondNumber);
        break;

        case '-':
            inputNumber.value = subtractTwoNumbers(firstNumber, secondNumber);
        break;

        case '/':
            inputNumber.value = divideTwoNumbers(firstNumber, secondNumber);
        break;

        case '*':
            inputNumber.value = multiplyTwoNumbers(firstNumber, secondNumber);
        break;
    }

    // first value needs to be set to result
    // second value needs to be set to default
    // this is to allow additional operations on top of result
    firstNumber = inputNumber.value;
    secondNumber = "";

    inputSign.innerHTML = '';
    // hiding the sign
}

function setSign(sign)
{
    currentSign = sign;
    // setting the chosen sign

    inputSign.innerHTML = currentSign;
    // showing the chosen sign to users
}



function addTwoNumbers(a, b)
{
    return parseInt(a) + parseInt(b);
}

function subtractTwoNumbers(a, b)
{
    return parseInt(a) - parseInt(b);
}

function multiplyTwoNumbers(a, b)
{
    return parseInt(a) * parseInt(b);
}

function divideTwoNumbers(a, b)
{
    if(b == 0)
    {
        alert("Division by 0 is not allowed! Calculator has been reset.");
        resetCalculator();
    }
        
    else
    {
        return (parseFloat(a) / parseFloat(b)).toFixed(2);
    }
}