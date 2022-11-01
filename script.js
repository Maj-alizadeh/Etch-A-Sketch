let container = document.createElement('div')
container.classList.add('container');
    for (let j = 0; j < 16; j++) {
        for (i = 0; i < 16; i++){
        let cell = document.createElement('div');
        container.appendChild(cell) ;
        }
    }
document.body.appendChild(container);
container.addEventListener('mouseover', hover)

function hover(e) {
    e.stopPropagation();
    e.target.classList.add('hover');
    
}