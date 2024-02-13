
let playeur = document.querySelectorAll('.playeur input');
let form = document.querySelector('.playeur');
let browser = document.querySelector('.browser label i');
let items = ["fa-regular fa-hand-back-fist", "fa-regular fa-hand", "fa-regular fa-hand-scissors"];
let result = document.querySelector('h1');
let values = ["Pierre", "Papier" , "Ciseaux"];
let browserChoise; // renvoie des index 
let playeurChoise = "";
let compteur = 0;
 


const getBrowserChoise = ()=>{
    browserChoise = Math.floor(Math.random() * 3);
    browser.setAttribute("class", items[browserChoise]);
    browserChoise != 2 ? browser.style.rotate = '-90deg' : browser.style.rotate = '0deg'
}

playeur.forEach(element => {
    element.addEventListener('click', (e) =>{
    playeurChoise = e.target.value;   
    getBrowserChoise()
    //console.log(e.target.value)        
    //console.log(values[browserChoise]);
    if ((playeurChoise == 'Pierre' && browserChoise == 2) ||
     (playeurChoise == 'Ciseaux' && browserChoise == 1) ||
     (playeurChoise == 'Papier' && browserChoise == 0))
     {
     result.innerText = "Gagné";
     } else if (playeurChoise === values[browserChoise]){
        result.innerText = "Egalité";
     } else{
        result.innerText = "Perdu";
     }
    });
 })


 