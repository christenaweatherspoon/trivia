// Player opens page to the first question
// Let player see question
// Let player choose between a series of answers using for loops

// for loop will loop through the questions once
//   store the 5 correct answers in an array

// link the corresponding form event listener function to the correct answer

// Loop through previous step four more times
//
// Let player see the number of answers they got correct
// Store correct answer in an array or in html

// maybe create a variable that says the question and then a seperate one with the answer
let score = 0;

function scoreTally (event) {
  if (event.target.value === '3') {
    score = score + 1
    console.log(score)
  }
}

document
  .querySelector('#first-question')
  .addEventListener('change', scoreTally)

document
  .querySelector('#second-question')
  .addEventListener('change', scoreTally) 

  document
  .querySelector('#third-question')
  .addEventListener('change', scoreTally) 

document
  .querySelector('#fourth-question')
  .addEventListener('change', scoreTally)
document
  .querySelector('#fifth-question')
  .addEventListener('change', scoreTally)



// use code below four times to pull answer from array

// append item out of dom to show correct answers
// check how manyanswers play got correct when they click submit
var submitButton = document.getElementById('submit-button').addEventListener('click', function (event) {
  console.log(event.target.value)
})



// display the score
// change answer order - add value onto DOM to be same for all correct answers