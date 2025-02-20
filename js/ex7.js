let trigger = "";
const arrayWords = [];

while (true) {
  trigger = prompt(`Please enter words, if you'd like to stop enter "Stop": `).toLowerCase();

  if (trigger === "stop") {
    break;
  }
  arrayWords.push(trigger)

}

if (arrayWords.length == 0) {
  console.log("No words to display, Stop was the first word entered");
} else {
  console.log("Words Entered:");
  for (let i = 0; i < arrayWords.length; i++) {
    console.log(arrayWords[i]);
  }

}
