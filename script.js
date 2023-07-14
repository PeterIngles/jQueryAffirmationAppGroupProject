$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('#fireButton').on('click', addFire )
  $('#iceButton').on('click', addIce )
}

let fireEmoji ='🔥' 
let iceEmoji = '❄️'

function addFire(){
  console.log(fireEmoji)
  $('#magicalDiv').append(` 
  <span> ${fireEmoji} </span>`);
  // Potential alternative 👇
  // // $('#magicalDiv').append( `  
  // <span class="fireEmoji">🔥</span>`);
}

function addIce(){
  console.log(iceEmoji)
  $('#magicalDiv').append(` 
  <span> ${iceEmoji} </span>`);
}