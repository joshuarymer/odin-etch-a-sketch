const uniCon = document.querySelector('#uni-con');
const btn = document.querySelector('#size-select');

let selectedSize = 16;

for(i=0; i<(selectedSize*selectedSize); i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    div.style.height = 800/selectedSize + "px";
    div.style.width = 800/selectedSize + "px";
    uniCon.appendChild(div);
}

document.querySelectorAll('.grid').forEach((div) => {
     div.addEventListener('mouseover', (e) =>
     e.target.classList.add('hover'))
     })

btn.addEventListener('click', () => changeSize());

function changeSize() {
             selectedSize = prompt("Enter a integer between 1-100 to choose the square's length.");
     
             uniCon.innerHTML= '';
     
             for(i=0; i<(selectedSize*selectedSize); i++) {
<<<<<<< HEAD
                 div = document.createElement('div');
                 div.classList.add('grid');
                 uniCon.appendChild(div);
=======
                div = document.createElement('div');
                div.classList.add('grid');
                div.style.height = 800/selectedSize + "px";
                div.style.width = 800/selectedSize + "px";
                uniCon.appendChild(div);
>>>>>>> bdcde2c (Add size-select button, add changeSize())
             };

             document.querySelectorAll('.grid').forEach((div) => {
                div.addEventListener('mouseover', (e) =>
                e.target.classList.add('hover'))
                })
}
                



 