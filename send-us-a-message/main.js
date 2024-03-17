

const button = document.querySelector('.btn');
const massege1 = document.querySelector('.in__massege');
const massege2 = document.querySelector('.in__massege1');
const massege3 = document.querySelector('.in__massege2');
const papers = document.querySelectorAll('.paper');
const form = document.querySelector('.content--input--area');
const topMassege = document.querySelector('.top__massege');
const btnHiddn = document.querySelector('.btn--last');
const allMassege = document.querySelector('.massege');

button.addEventListener('click', function() {
    massege2.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    massege3.style.transform = 'translate(-50%, -48%) rotate(0deg)';
    
    allMassege.style.margin = '-4rem auto';

    massege1.style.top = '80%';
    massege2.style.top = '80%';
    massege3.style.top = '80%';
    massege1.style.height = '20%';
    massege2.style.height = '20%';
    massege3.style.height = '20%';
    // massege1.style.transform = 'translate(-50%, -18%) rotate(0deg)';
    // massege2.style.transform = 'translate(-50%, -18%) rotate(0deg)';
    // massege3.style.transform = 'translate(-50%, -18%) rotate(0deg)';
    // clip-path: ;
    form.style.opacity = '0';
    
    topMassege.style.transform = 'rotateX(-180deg)';
    topMassege.style.zIndex = '1000';
    topMassege.style.height = '40%';
    topMassege.style.top = '28%';
    topMassege.style.clipPath = 'polygon(50% 0%, 0 54%, 100% 57.5%)'
    btnHiddn.classList.remove('hidden--btn');
    btnHiddn.style.opacity = '1';
})

