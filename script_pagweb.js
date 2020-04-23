let btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;


///// MENU DE NAVEGACION ANIMACION /////


btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times'); //al presionar el fa-bars seconvierte en X mientras esra en la lsita de items 

    if(activador){ //genera la transicion al presionar el fa-bars haciendo aparecer la lista de items

        menu.style.left='0';
        menu.style.transition='0.5s';

        activador= false;
    
    }else{

        activador= false;

        menu.style.left='-100%'; // esconde los items 
        menu.style.transition='0.5s';

        activador= true;
    }
    
});


/////// INTERCALAR CLASE ACTIVO //////

let enlaces= document.querySelectorAll('.lists li a');

enlaces.forEach( (Element) => { 

    Element.addEventListener('click', (event) => { //element va a hacer referencia al elemento que le vayamos a hacer click que en este caso son los li

        enlaces.forEach( (link) => {
                link.classList.remove('activo');
            });

            event.target.classList.add('activo');

        });    
});

////// EFECTOS SCROLL //////

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    ///MOSTRAR Y OCULTAR MENU ////

    if (prevScrollPos > currenScrollPos) {

        containerMenu.style.top= '0';
        containerMenu.style.transition= '0.5s';

    }else{
        containerMenu.style.top= '-60px';
        containerMenu.style.transition= '0.5s';

    }
    
    prevScrollPos = currenScrollPos;

    ///// MOSTRAR Y OCULTAR SCROLL ESTILOS /////

    let arriba=window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = 'none';

        goTop.style.right = '-100%';

    }else{
        containerMenu.style.borderBottom = '3px solid #ff0080';

        goTop.style.right = '0';
        goTop.style.transition = '0.5s'
    }    

}

goTop.addEventListener('click', () => {

    document.body.scrollTop = 0; // para visualizar en los navegadores safari 
    document.documentElement.scrollTop = 0;
    
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
    
});
















