window.onload = function () {
    const body = document.querySelector('body')
    const blur = document.querySelector('.wrapper')
    const blurBody = document.querySelector('.wrapper-body')
    const hamburger = document.querySelector('.hamburger')
    const close = document.querySelector('.closer')
    const nav = document.querySelector('nav')

    hamburger.addEventListener('click', function () {
        blur.classList.toggle('active');
        blurBody.classList.toggle('active');
        close.style.display = 'block';
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('active');
        body.style.overflow = 'hidden'
    })
    close.addEventListener('click', function () {
        blur.classList.toggle('active')
        blurBody.classList.toggle('active')
        nav.classList.toggle('active')
        close.style.display='none';
        body.style.overflow='auto'
    })
}
