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
// You could also add a class "questions" to each HTML element containing a question
// rather than by id, and use it in the following way:
// Use querySelectorAll to grab DOM element with the class "questions"
  // for example: querySelectorAll('.questions
// use forEach to add an event to each item with the class "questions"
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

// you can remove this, it's actually not doing anything: there's nothing with id score-card on the dom. There is an item with id score, but it doesn't need this event-listener which is listening for change events in a form
document
  .querySelector('#score-card')
  .addEventListener('change', scoreTally)
