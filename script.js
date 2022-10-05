const uniCon = document.querySelector('#uni-con');
for(i=0; i<256; i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    uniCon.appendChild(div);
}
document.querySelectorAll('.grid').forEach((div) => {
     div.addEventListener('mouseover', (e) =>
     e.target.classList.add('hover'))
     })
