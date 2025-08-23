window.addEventListener("load", () => {
    console.log("ya esta todo cargado!")

    let btnPrev = document.querySelector(".slider__btn-prev");
    let btnNext = document.querySelector(".slider__btn-next");
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allSlides = slides.length;

    //Boton Siguiente
    btnNext.addEventListener("click", () => {
        counter++;
        if(counter>=allSlides){
            counter = 0;
        }
        activarSlide();
    });
    
    //boton Anterior
    btnPrev.addEventListener("click", () => {
        counter--;
        if(counter<0){
            counter = allSlides-1;
        }
        activarSlide();
    });

    //activar slide
    let activarSlide = (index) => {
        clearActives();
        slides[counter].classList.add("slides__item--active")
    }
    
    //Limpiar activados
    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        });
    };

});