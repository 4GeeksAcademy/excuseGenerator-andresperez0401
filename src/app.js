// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// Excusas
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


//Funcion que se ejecuta al cargar la pagina	
window.onload = function() {
  //write your code here
  let excuse = getExcuse();
  document.getElementById("excuse").innerHTML = excuse;
};


//Funcion que en base a los arregloa de datos para crear la excusa, devuelve una excusa random
function getExcuse(){
  //numero random entre 1 y la longitud del array; Quien fue
  let quien = who[Math.floor(Math.random() * who.length)];

  //Quien hizo la accion
  let accion = action[Math.floor(Math.random() * action.length)];

  //Que hizo
  let que = what[Math.floor(Math.random() * what.length)];

  //Cuando
  let cuando = when[Math.floor(Math.random() * when.length)];

  let finalExcuse = quien + " " + accion + " " + que + " " + cuando;

  return finalExcuse
}
