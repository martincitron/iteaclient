/*var request = new XMLHttpRequest()

request.open('GET', 'http://acetestapi-mcitron.oc.lab.trask.cz/hw/v1/color', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
      console.log(data.color)
	  document.body.style.backgroundColor=data.color;
  } else {
    console.log('error')
	document.body.style.backgroundColor="chyba";
  }
}

request.send()*/


async function getColorAsync(el) 
{
  //let response = await fetch(`http://acetestapi-mcitron.oc.lab.trask.cz/hw/v1/color`);
  let response = await fetch(`https://lb-csob.apps.ca-central-1.starter.openshift-online.com/hw/v1/color`);
  let data = await response.json();
  document.getElementById(el).style.backgroundColor=data.color;
  return data;
}

var timeout = 800;
  
let k1 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k1')
  .then(data => console.log(data.color));
}, timeout)}, 1000);

let k2 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k2')
  .then(data => console.log(data.color));
}, timeout)}, 1500);

let k3 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k3')
  .then(data => console.log(data.color));
}, timeout)}, 2000);

let k4 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k4')
  .then(data => console.log(data.color));
}, timeout)}, 2500);

let k5 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k5')
  .then(data => console.log(data.color));
}, timeout)}, 3000);

let k6 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k6')
  .then(data => console.log(data.color));
}, timeout)},3500);

let k7 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k7')
  .then(data => console.log(data.color));
}, timeout)}, 4000);

let k8 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k8')
  .then(data => console.log(data.color));
}, timeout)}, 4500);

let k9 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k9')
  .then(data => console.log(data.color));
}, timeout)}, 5000);

let k10 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k10')
  .then(data => console.log(data.color));
}, timeout)}, 5500);

let k11 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k11')
  .then(data => console.log(data.color));
}, timeout)}, 6000);

let k12 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k12')
  .then(data => console.log(data.color));
}, timeout)}, 6500);

let k13 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k13')
  .then(data => console.log(data.color));
}, timeout)}, 7000);

let k14 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k14')
  .then(data => console.log(data.color));
}, timeout)}, 7500);

let k15 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k15')
  .then(data => console.log(data.color));
}, timeout)}, 8000);

let k16 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k16')
  .then(data => console.log(data.color));
}, timeout)}, 8500);


let k17 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k17')
  .then(data => console.log(data.color));
}, timeout)}, 9000);

let k18 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k18')
  .then(data => console.log(data.color));
}, timeout)}, 9500);

let k19 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k19')
  .then(data => console.log(data.color));
}, timeout)}, 10000);

let k20 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k20')
  .then(data => console.log(data.color));
}, timeout)}, 10500);

let k21 = setTimeout(function(){setInterval(function(el){
	getColorAsync('k21')
  .then(data => console.log(data.color));
}, timeout)}, 11000);
