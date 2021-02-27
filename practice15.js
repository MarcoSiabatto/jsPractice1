// Mini Calculator
const miniCalculator = () => {
  let op = prompt(
    "Please Select a Number to Execute Operation: \n 1. Summation \n 2. Substraction \n 3. Multiplication \n 4. Division"
  );
  // Validate the selected option
  // parseInt(op) >0 && parseInt(op) <= 4
  // op == "1" || op == "2" || op == "3" || op == "4"
  if (op === "1" || op === "2" || op === "3" || op === "4") {
    alert("You Must Choose an Option Between 1 and 4");
  } else {
    alert("Entered Else");
  }
};
