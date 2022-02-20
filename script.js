
const buttonContainer = document.querySelector('#button-container');
const arrowsContainer = document.querySelector('#arrows-container');

const displayInput = document.querySelector('#display-input');
const displayHistory = document.querySelector('#display-history');

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATIONS = ['*', '+', '-', '/']

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
            if (text === ' ') boxClass = 'box'
            else {
                boxClass = 'box';
                boxDiv.innerHTML = text;
            }

            boxDiv.setAttribute('class', boxClass);
            // console.log(gridProperties);


            if (DIGITS.includes(text)) callback = digitsCallback;
            else if (OPERATIONS.includes(text)) callback = operationsCallback;
            else callback = otherButtonsCallback;
            boxDiv.addEventListener('mousedown', callback);   
            rowDiv.appendChild(boxDiv);     

        }
    }
}

function digitsCallback(e) {
    const key = e.target.dataset.key;
    displayInput.innerHTML += key;
    // displayInputString += e.

}

function operationsCallback(e) {
    const key = e.target.dataset.key;
    displayInput.innerHTML += key;

    // console.log(e);
    // displayInputString += e.

}

function otherButtonsCallback(e) {
    const key = e.target.dataset.key;
    if (key === 'bck') 
        displayInput.innerHTML = displayInput.innerHTML.slice(0, -1);
    else if (key === 'enter') {
        calculateFromString(displayInput.innerHTML);
    }
    else if (key === 'clear') {
        displayInput.innerHTML = '';
    }

    console.log(e);
    // displayInputString += e.

}

function calculateFromString(string) {
    /* for (operation in OPERATIONS) {
        string = [string.split(operation);
    }
    console.log({string}); */
    indexOperator = false;
    indexEndOperation = false;
    partialResult = 0;
    for (i = 0; i< string.length; i++) {
        char = string.charAt(i);
        if (!DIGITS.includes(char))   {
            if (indexOperator === false) {
                operationType = char;
                indexOperator = i;    
                operation = char;
                a = string.slice(0, indexOperator);
                console.log({indexOperator});
                console.log({a});
                console.log({operation});
            }
            else {

                indexEndOperation = i;
                b = string.slice(indexOperator + 1, indexEndOperation);
                console.log({b});

            }
        }
        else if (i === string.length - 1) {
            indexEndOperation = i;
            // console.log(indexEndOperation, string, indexOperator + 1, indexEndOperation)
            b = string.slice(indexOperator + 1, indexEndOperation + 1);
            // console.log({b});
        }            
    }
    if (typeof a !== 'undefined') result = operationFromString(parseInt(a), parseInt(b), operation);
    else result = parseInt(string);
    console.log({result});
    displayHistory.innerHTML = string + " = " + result;

}

function operationFromString(a, b, operation) {
    switch (operation) {
        case '+': return a + b;  
        case '-': return a - b;  
        case '*': return a * b;  
        case '/': return a / b;  
        default: return "ERROR";    
    }
}

arrowsGridText = [[' ', '↥', ' '],
                ['↤', ' ', '↦'],
                [' ', '↧', ' ']];

arrowsGridProperties = new GridProperties(arrowsContainer,
        arrowsGridText,
        [3, 3])

createGrid(arrowsGridProperties);

buttonGridText = [[' ', ' ', 'bck', '/'],
                ['7', '8', '9', '*'], 
                ['4', '5', '6', '-'], 
                ['1', '2', '3', '+'], 
                ['0', '.', 'clear', 'enter']]

buttonGridProperties = new GridProperties(buttonContainer,
        buttonGridText,
        [5, 4])
createGrid(buttonGridProperties);