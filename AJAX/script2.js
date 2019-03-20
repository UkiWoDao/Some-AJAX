document.getElementById('button-1').addEventListener('click', loadUser);
document.getElementById('button-2').addEventListener('click', loadUsers);

function loadUser(){
    var xhr = new XMLHttpRequest();
    // (method, url, async boolean)
    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
        if(this.status == 200){
          // var user = this.responseText; returns undefined, need parse
          var user = JSON.parse(this.responseText);

          // output a list
          var output = '';
          output +=
          // ancient ES5 concat method, ES6 template literal can be used
          '<ul>' +
              '<li>ID: ' + user.id + '</li>' +
              '<li>Name: ' + user.name + '</li>' +
              '<li>Email: ' + user.email + '</li>' +
          '</ul>';
          document.getElementById('user').innerHTML = output;
        }
    };

    xhr.onerror = function(){
        console.log('This is a generic error message');
    };

    xhr.send();
}

function loadUsers(){
    var xhr = new XMLHttpRequest();
    // (method, url, async boolean)
    xhr.open('GET', 'users.json', true);

    xhr.onload = function(){
        if(this.status == 200){
          // var user = this.responseText; returns undefined, need parse
          var users = JSON.parse(this.responseText);

          // output a list
          var output = '';

          for(var i in users){
              output +=
              '<ul>' +
                  '<li>ID: ' + users[i].id + '</li>' +
                  '<li>Name: ' + users[i].name + '</li>' +
                  '<li>Email: ' + users[i].email + '</li>' +
              '</ul>';
          }
        }
        document.getElementById('users').innerHTML = output;
    };

    xhr.onerror = function(){
        console.log('This is a generic error message');
    };

    xhr.send();
}
