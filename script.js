// Player opens page to the first question

// Let player see question

// Let player choose between a series of answers using for loops

// link the corresponding form event listener function to the correct answer

// Let player see the number of answers they got correct

// Store correct answer in html

// Score will start at 0. Score variable declared to initiate this game

let score = 0

function scoreTally (event) {
  if (event.target.value === '3') {
    score = score + 1
    console.log(score)
    document.getElementById('score').innerHTML = score.toString()
  }
}
// Query selector used to adjust score tally by "grabbing" 3rd value in html
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

// append item out of dom to show correct answers

// display the score

document
  .querySelector('#score-card')
  .addEventListener('change', scoreTally)