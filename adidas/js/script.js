const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const tenis = document.querySelector('.tenis img');
const compra = document.querySelector('.compra button');
const info = document.querySelector('.info h3')
const numeros = document.querySelector('.numeros');


container.addEventListener("mousemove" , (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});


container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    tenis.style.transform = "translateZ(200px) rotateZ(-45deg)";
    info.style.transform = "translateZ(125px)";
    numeros.style.transform = "translateZ(100px)";
    compra.style.transform = "translateZ(75px)";
});

container.addEventListener('mouseleave', e => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = "all 0.5s ease";
    title.style.transform = "translateZ(0px)";
    tenis.style.transform = "translateZ(0px) rotateZ(0deg)";
    info.style.transform = "translateZ(0px)";
    compra.style.transform = "translateZ(0px)";
    numeros.style.transform = "translateZ(0px)";
});