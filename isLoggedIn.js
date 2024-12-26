/*var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');
var password = urlParams.get('password');*/

var username = localStorage.getItem('username');
var password = localStorage.getItem('password');
//alert('username is ' + username + '\n' + 'password is ' + password);

var names = [
  'Sam_Mergu',
  'Caleb_Brewster',
  'Abrar_Ahmed',
  'Emily_Koss',
  'Chris_Holler',
  'Adaire_Heady',
  'TSA_Admin',
];
var keys = [
  '@password1',
  '@password1',
  '@password1',
  '@password1',
  '@password1',
  '@password1',
  '@password1'
];
for (let i = 0; i < names.length; i++) {
  if (username == names[i] && password == keys[i]) {
    var badLogin = false;
  }
}
if (badLogin != false) {
  alert('You must be logged in to view this content. \nPlease log in.');
  window.location.href = 'login.html';
}