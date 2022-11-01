let size = 16;
let container = document.createElement('div');
container.classList.add('page');
let gridButton = document.createElement('button');
gridButton.classList.add('grid-button')
gridButton.textContent= 'Grid Size';
document.body.appendChild(gridButton);
gridButton.addEventListener('click', gridSize)

function gridSize() {
    size = prompt('Please enter the grid size:')
    container.innerHTML='';
    //page.style.gridTemplateColumns = `repeat (${size},1fr)`;
    sketch();

}
// creates the grid
function sketch() {
    container.setAttribute('style',`grid-template-columns:repeat(${size},1fr)`)
    for (let j = 0; j < size; j++) {
        for (i = 0; i < size; i++){
        let cell = document.createElement('div');
        container.appendChild(cell) ;
        }
    }
}
document.body.appendChild(container);
    
    // on hover acts as a pen!
    function hover(e) {
        e.stopPropagation();
        e.target.classList.add('hover');
    }

sketch();
container.addEventListener('mouseover', hover)