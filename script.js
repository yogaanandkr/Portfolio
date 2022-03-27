window.addEventListener('scroll', function(){
    const nava = this.document.querySelector('.navbar')
    nava.classList.toggle('sticky', window.scrollY > 10)


})

