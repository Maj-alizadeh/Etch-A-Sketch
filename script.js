let size = 16;
let page = document.createElement('div');
page.classList.add('page');

const container = document.querySelector('.container');
container.appendChild(page);

const controls = document.querySelector('.controls')
const clearButton = document.createElement('button');
const gridButton = document.createElement('button');
controls.appendChild(gridButton);
controls.appendChild(clearButton);

gridButton.classList.add('grid-button')
gridButton.textContent= 'Grid Size';
gridButton.addEventListener('click', gridSize)

clearButton.textContent = 'Clear'
clearButton.addEventListener('click', clearPage)

//change the grid size
function gridSize() {
    size = prompt('Please enter the grid size:')
    sketch();

}

//clears the sketch page and add grid
function clearPage() {
    page.innerText = '';
    for (let j = 0; j < size; j++) {
        for (i = 0; i < size; i++){
        let cell = document.createElement('div');
        page.appendChild(cell) ;
        }
    }
}

// creates the grid
function sketch() {
    page.setAttribute('style',`grid-template-columns:repeat(${size},1fr)`)
    clearPage();
}

    
    // on hover acts as a pen!
    function hover(e) {
        e.target.classList.add('hover');
    }

sketch();
page.addEventListener('mouseover', hover)