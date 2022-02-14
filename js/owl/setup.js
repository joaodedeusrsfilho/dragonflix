//arquivo js que faz o carrosel funciona
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    //botão abaixo da imagem definido no nav
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})