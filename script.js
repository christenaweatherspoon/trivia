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
let answersToQuestionOne = [
  'Radric Delantic Davis.',
  'Nayvadius DeMun Wilburn.',
  'Jeffery Lamar Williams.',
  'DeAndre Cortez Way.'
];

let answersToQuestionTwo = [
  'Miami, Florida.',
  'Youngstown, Ohio.',
  'Bessemer, Alabama.',
  'Atlanta, Georgia.'
];

let answersToQuestionThree = [
  'It’s October, 17th.',
  'He actually borrowed the number from the address of his grandfathers house.',
  'It’s the time his son was born.',
  '1017 is the last four digits of is social security number.'
];

let answersToQuestionFour = ['Yes.', 'No.', 'Maybe so.', 'Bitch, I might be.'];

let answersToQuestionFive = [
  'A portrait of his grandfather.',
  'A Smith & Wesson M&P 380.',
  'His wifes name.',
  'An ice cream cone.'
];

let answersToQuiz = [
  [
    'Radric Delantic Davis.',
    'Nayvadius DeMun Wilburn.',
    'Jeffery Lamar Williams.',
    'DeAndre Cortez Way.'
  ],
  [
    'Miami, Florida.',
    'Youngstown, Ohio.',
    'Bessemer, Alabama.',
    'Atlanta, Georgia.'
  ],
  [
    'It’s October, 17th.',
    'He actually borrowed the number from the address of his grandfathers house.',
    'It’s the time his son was born.',
    '1017 is the last four digits of is social security number.'
  ],
  ['Yes.', 'No.', 'Maybe so.', 'Bitch, I might be.'],
  [
    'A portrait of his grandfather.',
    'A Smith & Wesson M&P 380.',
    'His wifes name.',
    'An ice cream cone.'
  ]
];
console.log(answersToQuiz, 0);
document
  .querySelector('#first-question')
  .addEventListener('change', function(event) {
    console.log(event.target.value);
  });
