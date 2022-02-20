
const buttonContainer = document.querySelector('#button-container');
const arrowsContainer = document.querySelector('#arrows-container');

class GridProperties {
    constructor(container, text, size) {
        this.container = container;
        this.text = text;
        this.size = size;
    }
}

function createGrid(gridProperties) {
    
    for (i=0; i<gridProperties.size[0]; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        gridProperties.container.appendChild(rowDiv);
        for (j=0; j<gridProperties.size[1]; j++) {
            text = gridProperties.text[i][j];
            const boxDiv = document.createElement('button');
            boxDiv.setAttribute('id', 'box_' + j.toString() + '_' + i.toString());
            boxDiv.setAttribute('data-key', text);
            if (text === ' ') boxClass = 'hidden-box'
            else {
                boxClass = 'box';
                boxDiv.innerHTML = text;
            }
            boxDiv.setAttribute('class', 'box');
            console.log(gridProperties);

            rowDiv.appendChild(boxDiv);        
        }
    }

}

arrowsGridText = [[' ', '↥', ' '],
                ['↤', ' ', '↦'],
                [' ', '↧', ' ']];

arrowsGridProperties = new GridProperties(arrowsContainer,
        arrowsGridText,
        [3, 3])

createGrid(arrowsGridProperties);

buttonGridText = [[' ', ' ', 'bck', 'b'],
                ['7', '8', '9', '*'], 
                ['4', '5', '6', '-'], 
                ['1', '2', '3', '+'], 
                ['0', '.', 'clear', 'enter']]

buttonGridProperties = new GridProperties(buttonContainer,
        buttonGridText,
        [5, 4])
createGrid(buttonGridProperties);