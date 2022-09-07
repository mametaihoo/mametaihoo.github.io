var dropdown = document.querySelector('.dropdown');
var dropdowncontent = document.querySelector('.dropdown-content');
var galka1 = document.querySelector('.galka1');
var galka2 = document.querySelector('.galka2');
dropdown.onclick = function(){
  dropdowncontent.classList.toggle('active');
  galka1.classList.toggle('galka-active1');
  galka2.classList.toggle('galka-active2');
    console.log(checked)
};