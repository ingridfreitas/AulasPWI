var m = 0;
var mvl = new Array();
mvl [0] = "img/marvel/capgif.gif";
mvl [1] = "img/marvel/im.gif";
mvl [2] = "img/marvel/thorgif.gif";
mvl [3] = "img/marvel/hulkgif.gif";
mvl [4] = "img/marvel/bw.gif";
mvl [5] = "img/marvel/gavigodgif.gif";
function mudar(){
    document.getElementById("originais").src = mvl[m];
    m++;
    if(m == 5){
        m == 1;
    }
}
setInterval('mudar()', 4000);