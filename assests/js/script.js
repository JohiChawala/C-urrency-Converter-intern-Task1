// include api for currency change 
const api = "https://api.exchangerate-api.com/v4/latest/USD"; 

// for selecting different controls 
var search = document.querySelector(".searchBox"); 
var convert = document.querySelector(".convert"); 
var fromCurrecy = document.querySelector(".from"); 
var toCurrecy = document.querySelector(".to"); 
var finalValue = document.querySelector(".finalValue"); 
var finalAmount = document.getElementById("finalAmount"); 
var resultFrom; 
var resultTo; 
var searchValue; 

// Event when currency is changed 
fromCurrecy.addEventListener('change', (event) => { 
    resultFrom = `${event.target.value}`; 
}); 
  
