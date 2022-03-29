let cligno = document.querySelector('.cligno');

// . ou # nécessaire que pour les querySelector / querySelectorAll

setInterval(function(){
    cligno.classList.toggle('clignoDel');
},300);