let feuRouge = document.querySelector('#feuRouge');
let feuOrange = document.querySelector('#feuOrange');
let feuVert = document.querySelector('#feuVert');


function feuTri(){
    setTimeout (function(){
        feuRouge.classList.remove('feuRouge');
        feuOrange.classList.remove('feuOrange');
        feuVert.classList.add('feuVert');
            setTimeout (function(){
                feuOrange.classList.add('feuOrange');
                feuVert.classList.remove('feuVert');
                feuRouge.classList.remove('feuRouge');
                setTimeout (function(){
                    feuRouge.classList.add('feuRouge');
                    feuOrange.classList.remove('feuOrange');
                    feuVert.classList.remove('feuVert');
                    feuTri();
                }, 2000);
            },2000);
    },2000);
}

feuTri();