function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map(elem => elem.split('='));
}

function thirdStep(input) {
  return input.map(arr => arr.map(elem => elem.replace(/\+/g, ' ')));
}

function fourthStep(input) {
  // Your code here
}

function fifthStep(input) {
  // Your code here
}

function parseBody(str) {
  // Your code here
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
