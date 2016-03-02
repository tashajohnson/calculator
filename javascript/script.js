var Num = function(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}
function addNumbers() {
  var scrn = document.getElementById('screen');
  var history = document.getElementById('history');
  var li = document.createElement('li');
  scrn.innerHTML = num1.value + " \+ " + num2.value + " \= " + (Number(num1.value) + Number(num2.value));
  li.innerHTML = scrn.innerHTML;
  history.appendChild(li);
  num1.value = null;
  num2.value = null;
}
function subNumbers() {
  var scrn = document.getElementById('screen');
  var history = document.getElementById('history');
  var li = document.createElement('li');
  scrn.innerHTML = num1.value + " \- " + num2.value + " \= " + (Number(num1.value) - Number(num2.value));
  li.innerHTML = scrn.innerHTML;
  history.appendChild(li);
  num1.value = null;
  num2.value = null;
}
function multNumbers() {
  var scrn = document.getElementById('screen');
  var history = document.getElementById('history');
  var li = document.createElement('li');
  scrn.innerHTML = num1.value + " x " + num2.value + " \= " + (Number(num1.value) * Number(num2.value));
  li.innerHTML = scrn.innerHTML;
  history.appendChild(li);
  num1.value = null;
  num2.value = null;
}
function divNumbers() {
  if (num2.value === "0") {
    alert("You may not divide by zero");
  } else {
    var scrn = document.getElementById('screen');
    var history = document.getElementById('history');
    var li = document.createElement('li');
    scrn.innerHTML = num1.value + " \/ " + num2.value + " \= " + (Number(num1.value) / Number(num2.value));
    li.innerHTML = scrn.innerHTML;
    history.appendChild(li);
    num1.value = null;
    num2.value = null;
  }
}
function clearField() {
  var scrn = document.getElementById('screen');
  scrn.innerHTML = null;  
}