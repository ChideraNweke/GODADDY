window.onload = function () {

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
    })
    close.addEventListener('click', function () {
        blur.classList.toggle('active')
        blurBody.classList.toggle('active')
        nav.classList.toggle('active')
        close.style.display='none';
    })
}
