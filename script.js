window.addEventListener('scroll', function(){
    const nava = this.document.querySelector('.navbar')
    nava.classList.toggle('sticky', window.scrollY > 10)


})


// owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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