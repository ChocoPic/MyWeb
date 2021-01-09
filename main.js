const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', function(event) {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});