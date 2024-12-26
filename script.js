//alert(localStorage.getItem('regPw'));


var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('regName') && urlParams.has('regPw')) {
  localStorage.setItem('regName', urlParams.get('regName'));
  localStorage.setItem('regPw', urlParams.get('regPw'));
  alert(localStorage.getItem('regName') + " is the username and the password is " + localStorage.getItem('regPw'));
}




function login(username, password) {
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
      alert("Successful Login!\nWelcome, " + username + "!");
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.open("index.html");
      window.close();
    }
  }
  /*if (username == localStorage.getItem('storedName') && password == localStorage.getItem('storedPw')) {
    alert("Successful Login!\nWelcome, " + username + "!");
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.open("index.html");
    window.close();
  }*/
  // alert('\n' + username + '\n' + localStorage.getItem('regName'));

  document.write('This is not a recognized account. Please reload.');
}


function redirect(pagename) {
  window.location = pagename + '.html';
}

function ifLogged(func) {
  var username = localStorage.getItem('username');

  if (username == null || username == '') {
    window.location = 'login.html';
  }
  else {
    func();
  }
}
addEventListener('DOMContentLoaded', function() {
  if (document.getElementsByClassName('price').length != 0) {
    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName('price')[i].addEventListener('click', function() {
        document.getElementById('payMethods').style.visibility = 'visible';
      });
    }
  }
});

/*function register(username, password) {
  //WIP
  alert('You have successfully registered!');
  window.open('login.html?regName=' + username + '&regPw=' + password);
}*/


if (document.getElementById('reserveForm')) {
  // Code to execute if element with id 'reserveForm' exists

  var reserveForm = document.getElementById('reserveForm');

  reserveForm.addEventListener('submit', function(event) {
    event.preventDefault()

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;


    document.getElementById("displayForm").style.display = 'none';
    document.getElementById("postSubmit").style.display = 'block';
    document.getElementById("submitMessage").innerHTML = 'Thank you for reserving equipment and/or space at Kainotomia, <b>' + name + '</b>! We will contact your email <b>' + email + '</b> as soon as we can about your reservation. If you have any questions, please contact us at <a href="sam.mergu@kainotomia.com">sam.mergu@kainotomia.com</a>.<br><br>'

  });
}