window.addEventListener('scroll', function(){
    const nava = this.document.querySelector('.navbar')
    nava.classList.toggle('sticky', window.scrollY > 10)
    const scroll = this.document.querySelector('.scroll-up-btn')
    scroll.classList.toggle('scroll-none', window.scrollY > 10)
})



// window.addEventListener('scroll', function(){
//     const scroll = this.document.querySelector('.scroll-up-btn')
//     nava.classList.toggle('scroll-none', window.scrollY > 10)
// })

