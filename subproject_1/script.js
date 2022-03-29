console.log("Début de script !");
setTimeout(function() {
    console.log("J'ai atteint mes 5 secondes !");
}, 5000);
console.log("Fin du script");

let nbDeCompte = 0
console.log("je continue avec l\'autre timer");
setInterval(function() {
    //console.log(`J'affiche un message + nbDeCompte++`); meme methode facon differente de l'ecrire
   // console.log(`J'affiche un message  ${ nbDeCompte++}! `);
    //console.log(prompt("donnez un mot : "))
}, 2000);
console.log("Je finis le tout !");

document.addEventListener("click", function(){
    clearInterval(timer);
    console.log("Je stoppe le timer");
})