const container = document.querySelector('.container')

function createGrid(number) {
    container.textContent = '';
    for (let i = 0; i<number; i++) {
        const rowDiv = document.createElement('div')
        for (let j = 0; j<number; j++) {
            const squareDiv = document.createElement('div')
            squareDiv.style.height = `${400/number}px`;
            squareDiv.style.width = `${400/number}px`;

            // Add a separate class to the square divs so that the container does not get the rules.

            squareDiv.setAttribute('class', 'addClass')
            rowDiv.appendChild(squareDiv)
        }
        container.appendChild(rowDiv)
    }
}


createGrid(16)
let blackSelection = true;
let rgbSelection = false;

function onHover(event) {
    if (event.target.classList.contains('addClass')) {

        // Make sure the container itself does not get the styles by checking if the square divs were hovered over

        if (blackSelection === true) {
            event.target.classList.add('black-hovered');
            event.target.style.backgroundColor = 'black';
        } else {
            event.target.style.backgroundColor = randomColorPicker();
        }

        if (event.target.classList.contains('black-hovered')) {
            if (Number(event.target.style.opacity) < 1 && event.target.style.backgroundColor === 'black') {
                // Increase opacity by 0.2 on each hover
                event.target.style.opacity = `${Number(event.target.style.opacity) + 0.4}`;
                console.log(event.target.style.opacity)
            }
        }
    }

}

container.addEventListener('mouseover', onHover)
container.classList.add('allDivs')


function generateNewGrid() {
    let newNumber = Number(prompt('Please enter a number between 1 and 100'))
    if (newNumber < 0 || newNumber > 100) {
        alert("Incorrect, please enter a number between 0 and 100 by clicking the button again")
    } else {
        createGrid(newNumber)
    }
}

askButton = document.querySelector('#ask')
askButton.addEventListener('click', generateNewGrid)


function changeToBlack() {
    blackSelection = true;
    rgbSelection = false;
}

function changeToRGB() {
    blackSelection = false;
    rgbSelection = true;
}

const blackButton = document.querySelector('#black');
const rgbButton = document.querySelector('#random');
const resetButton = document.querySelector('#reset');

blackButton.addEventListener('click', changeToBlack);
rgbButton.addEventListener('click', changeToRGB);
resetButton.addEventListener('click', () => createGrid(16));

function randomColorPicker() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return 'rgb(' + red + ',' + green + ',' + blue + ')'
}
