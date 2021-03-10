var nums = 1;
imagem [1] = "img/series/himym.jpg"
imagem [2] = "img/series/tbbt.jpg"
imagem [3] = "img/series/vikings2.jpg"
function rolserie(){
    document.getElementById("serie").src=imagem[nums];
    nums++;
    if(nums == 4){
        nums = 1;
    }
};
setInterval('rolserie()',2000);

var numf = 5;
imagem [5] = "img/filmes/arthur2.jpg"
imagem [6] = "img/filmes/branquelas.jpg"
imagem [7] = "img/filmes/ragnarok2.jpg"
function rolfilm(){
    document.getElementById("filme").src=imagem[numf];
    numf++;
    if(numf == 8){
        numf = 5;
    }
};
setInterval('rolfilm()',2000);

var numd = 9;
imagem [9] = "img/desenhos/gum.jpg"
imagem [10] = "img/desenhos/winx.jpg"
imagem [11] = "img/desenhos/xmen.jpg"
function roldes(){
    document.getElementById("desenho").src=imagem[numd];
    numd++;
    if(numd == 12){
        numd = 9;
    }
};
setInterval('roldes()',2000);