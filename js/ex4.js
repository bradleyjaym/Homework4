// TODO: create the dog object here

const dog = {
  name: "Quincy",
  species: "French Bulldog",
  size: "75",
  bark(){
    return "Bork! Bork!"
  }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);