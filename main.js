const top1 = document.getElementById('top1');
const top2 = document.getElementById('top2');
const bottom1 = document.getElementById('bottom1');
const bottom2 = document.getElementById('bottom2');
const sun = document.getElementById('sun');

window.addEventListener('scroll',function() {
   value = window.scrollY;
   sun.style.top = value * 0.4 +'px';
   bottom2.style.top = value * 0.1 +'px';

})


