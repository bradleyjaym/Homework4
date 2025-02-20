// Calculator Function

const math = (n1, n2, type) => {
  if (type == "/"){
    return n1 / n2
  }
  else if (type == "-"){
    return n1 - n2
  }
  else if (type == "+") {
    return n1 + n2
  }
  else if (type == "*") {
    return n1 * n2
  }
}

const arg1 = Number(prompt("Enter Number:"));
const arg2 = Number(prompt("Enter Number:"));
const mathType = prompt("Enter Mathematical Operation (+, -, *, /):");

if (isNaN(arg1) || isNaN(arg2)) {
  console.log("One argument was not a number");
} else {
  console.log(`The math operation results of ${arg1} ${mathType} ${arg2} =`, math(arg1, arg2, mathType));
}

