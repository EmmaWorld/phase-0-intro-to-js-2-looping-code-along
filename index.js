// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    return messages;
  }

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "birthday";
const messages = writeCards(names, event);
console.log(messages);


function countDown() {
  let countDownNum = 11;
    while (countDownNum--) {
      console.log(countDownNum)
    }

}
