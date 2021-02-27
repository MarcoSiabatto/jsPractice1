// Summation of two numbers

const sumTwoNums = () => {
    let num1 = prompt("Enter First Number");
    let num2 = prompt("Enter Second Number");
    console.log(num1, num2)
    let result= parseInt(num1)+parseInt(num2);
    alert("The Summation is "+result);
  };
// Substraction of two numbers
const subTwoNums = () => {
    let num1 = prompt("Enter First Number");
    let num2 = prompt("Enter Second Number");
    console.log(num1, num2)
    let result= parseInt(num1)-parseInt(num2);
    alert("The Substraction is "+result);
  };
// Multiplication of two numbers
const multTwoNums = () => {
    let num1 = prompt("Enter First Number");
    let num2 = prompt("Enter Second Number");
    console.log(num1, num2)
    let result= parseInt(num1)*parseInt(num2);
    alert("The Multiplication is "+result);
  };
// Division of two numbers
const divTwoNums = () => {
    let num1 = prompt("Enter First Number");
    let num2 = prompt("Enter Second Number");
    console.log(num1, num2)
    // Zero Validation
    if (num2 !=0) {
        let result= parseFloat(num1)/parseFloat(num2);
        alert("The Division is "+result);
    } else {
        alert("It is impossible to divide by zero")
    }
  };