// Function
const myFunc = (inputArray) => {

  let returnObject = {
    firstElement: inputArray[0],
    lastElement: inputArray[inputArray.length - 1],
    length: inputArray.length,
    
  };
  return returnObject
  
}

const array = myFunc([4,2,5,7,8,10])
//const array = myFunc(["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}])
console.log(`firstElement:`,array.firstElement)
console.log(`lastElement:`, array.lastElement)
console.log(`length`, array.length)

