// simple function to test
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    console.log('button clicked');
    // create XHR object
    var xhr = new XMLHttpRequest();

    // OPEN function - type, url/file, async or note
    xhr.open('GET', 'sample.txt', true);
    console.log('READYTSTATE: ', xhr.readyState);

    // OPTIONAL - used for loaders
    xhr.onprogress = function() {
        console.log('READYTSTATE: ', xhr.readyState);

    }
    // onload has similar functionality as onreadystate
    xhr.onload = function(){
              console.log('READYTSTATE: ', xhr.readyState);
        if (xhr.status == 200) {
            // console.log(xhr.responseText);
        }
    }

    xhr.onerror = function(){
        console.log('Request Error...');
    }

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// xhr.onreadystatechange = function() {
//     console.log('READYTSTATE: ', xhr.readyState);
//     if(this.readyState == 4 && this.status == 200){
//       //  console.log(this.responseText);
//     }
// }

  // sends request
  xhr.send();
}


// HTTP statuses
// 200: 'ok'
// 403: 'forbidden'
// 404: 'not found'
