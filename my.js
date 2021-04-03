function addGS() {

	const url = "https://script.google.com/macros/s/AKfycbz8PTsZATejBB4z1jBBYYzcrAWu1gRMsnMF83i3ytJNrDWrt6p7rrqD8Ig9wfOLfzXThQ/exec";

	fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
	body: JSON.stringify({name:"Alvin"}) // body data type must match "Content-Type" header
  });



}


document.getElementById('btn2').addEventListener('click',addGS);
