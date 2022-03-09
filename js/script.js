const hambugger = document.getElementById('hambugger'),
navUL = document.querySelector('.nav-ul');

hambugger.addEventListener('click', ()=>{
    navUL.classList.toggle('show');
});