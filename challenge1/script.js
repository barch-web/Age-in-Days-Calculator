function ageCalculator() {
  var birthYear = prompt("Please Enter Year of Birth: ");
  var ageInDays = (2021 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
  h1.setAttribute('id', 'days');
  h1.appendChild(textAnswer);
  document.getElementById('myResult').appendChild(h1);
}


function reset() {
  document.getElementById('days').remove();
}