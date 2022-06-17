document.querySelector('.header-burger').addEventListener('click', function() {
    document.querySelector('.header-nav').classList.toggle('open-nav')
    this.classList.toggle('active-burger')
})