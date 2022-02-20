
const buttonContainer = document.querySelector('#button-container');

function createGrid(container, gridSize) {
    
    for (i=0; i<gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        container.appendChild(rowDiv);
        for (j=0; j<gridSize; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.setAttribute('class', 'box');
            boxDiv.setAttribute('id', 'box_' + j.toString() + '_' + i.toString());
            
            // boxDiv.addEventListener('mouseover', changeColor)
            // boxDiv.addEventListener('mousedown', changeColor)

            rowDiv.appendChild(boxDiv);        
        }
    }

}

createGrid(buttonContainer, 5);