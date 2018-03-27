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
    let answersToQuiz = [0, 1, 2, 3, 4]
    console.log(answersToQuiz, 0)

    
    document.querySelector('#first-question').addEventListener('change', function (event) {
    console.log(event.target.value)
})