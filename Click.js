// JavaScript File
let response=document.getElementById("response");
function Click() {
  let answer=document.getElementById("answer");
  let number=Math.floor(Math.random() * 6) + 1;
  let answerValue;
  answerValue=Number(answer.value); // This turns the number you guess from a string to a number
  if (answerValue==number) { // This if statement checks to see if the diameter is less than 0, or had a letter in it when the button was clicked
    document.getElementById("myimage").src="./images/okhand.png";
    response.innerHTML="You guessed the right number!";
  }
  else if(answerValue==0 || isNaN(answerValue) || answerValue>6) {
    document.getElementById("myimage").src="./images/questionmark.png";
    response.innerHTML="Number is not usable, please guess a number between 1 and 6"; // This line of code sends the value it found for the area of the circle to the area divresult
  }
  else {
    document.getElementById("myimage").src="./images/thumbsdown.png";
    response.innerHTML="Wrong number, try again!";
  }
}