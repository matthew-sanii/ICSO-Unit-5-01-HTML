// JavaScript File
let response=document.getElementById("response");
function Click(){
  let answer=document.getElementById("answer");
  let number=Math.floor(Math.random() * 6) + 1;
  let answerValue;
  answerValue=Number(answer.value); // This turns the number you guess from a string to a number
  if (answerValue==number) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    response.innerHTML="You guessed the right number!";
  }
  else if(answerValue==0 || isNaN(answerValue) || answerValue>=6) {
    response.innerHTML="Invalid number, please input new number"; // This line of code sends the value it found for the area of the circle to the area divresult
}
  else {
    response.innerHTML="Wrong number, try again!";
  }
}