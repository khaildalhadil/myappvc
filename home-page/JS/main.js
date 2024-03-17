const skills  = document.querySelectorAll('.skills');
const mainText  = document.querySelector('.main--h1');
const contentParg = document.querySelector('.content--parg');
const numbersProject = document.querySelector('.numbers--project');
const textStudent = document.querySelector('.student')
const navBar = document.querySelector('.navbar')

// h1 will be array element
const htmlSpans = mainText.innerText.split('').map((letter, i) => {
    return `<span style= "animation-duration: ${
        Math.random() * 5 }s; filter: hue-rotate(${i *50}deg">${letter}</span>`
}).join('');

// new every letter in h1 became in span
mainText.innerHTML = htmlSpans
// console.log(htmlSpans)

// skills.forEach((skill)=> {
//     skill.style.color = 'red';
// })

// skills.forEach((skill) => )


// number move
// let counterNumber = 0; 

// const undateCounter = setInterval(()=> {
    //     counterNumber++;
    //     numbersProject.textContent = counterNumber;
    
    //     if (counterNumber >= 20) {
        //         clearInterval(undateCounter)
        //         // numbersProject.style.color = '#01ad71';
        //     }
        
        // })

// number move 2
function starCount(el) {
    // dataset.gole == 20
    let goal = el.dataset.gole;
    let count = setInterval(()=> {
        // el.textContent == 0
        el.textContent++
    if (el.textContent == goal) {
        clearInterval(count)
    }
    }, 200)
}

starCount(numbersProject);


// split => split every litter to array
// map => loop every litter in array => letter  i => index
let spans = textStudent.innerText.split('').map((letter, i)=> {
    // new all litter in span 
    return `<span style='transition-delay: ${i*40}ms; filter: hue-rotate(${i*30}deg'>${letter}</span>`
}).join(''); 

textStudent.innerHTML = spans;

console.log(spans)

// nav 

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky')
    }
})