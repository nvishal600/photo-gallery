$(document).ready(function(){
    $('.bannSlide').owlCarousel({
        items:1,
        loop:true,
        margin:5,
        center:true,
        nav:true,
        dots:false,
        navText:[`<i class="fas fa-long-arrow-alt-left"></i>`,`<i class="fas fa-long-arrow-alt-right"></i>`],
        
    })
})

$(document).ready(function(){
    $('.conceptSlide').owlCarousel({
        items:3,
        loop:true,
        margin:5,
        center:true,
        nav:true,
        dots:false,
        navText:[`<i class="fas fa-long-arrow-alt-left"></i>`,`<i class="fas fa-long-arrow-alt-right"></i>`],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
               
            },
            1000:{
                items:2,
                
            },
            1232:{
                items:3,
                
                
            }
        }
    })
})

showPOP.addEventListener("click",function(){
    actualPOP.classList.toggle('hidden');
    mainDiv.classList.toggle("blurActive");
})
clear.addEventListener("click",function(){
    actualPOP.classList.toggle('hidden');
    mainDiv.classList.toggle("blurActive");
})
btn.addEventListener("click",function(){
    actualPOP.classList.toggle('hidden');
    mainDiv.classList.toggle("blurActive");
})







