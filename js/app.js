//House Moses: Kim, Carlosalberto, Farrah and Gabriel
let answer = document.getElementById('answer');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let button = document.querySelectorAll('button')
let userChoice;
let botChoice;

function findWinner() {
  fetch(`/winner?pal=${input}`)
  .then(response => response.json())
    .then((result) =>{
      console.log(result)
      if(result === false){
        answer.innerHTML = (`You lose`);
     } else if (result === true){
       answer.innerHTML = (`You win!`);
      }
      document.getElementById('answer').innerHTML = ""
   })
}
// if statement with innerHTML allows to display in DOM
// button.addEventListener("click", findWinner =>{
//   console.log("button clicks")
// });
button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log("button works");
  });
});
