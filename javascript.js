const main = document.querySelector('main');
const sketch = document.querySelector('#sketch');
const numOfSquares = document.querySelector('#numOfSquares');
const reset = document.querySelector('#Reset');
const reg = /^(?:[1-9]\d*|\d)$/;
const colorSelector = document.querySelector('#colorSelector');
const randomColor = Math.floor(Math.random()*16777215).toString(16);


for (i = 0; i < 256; i++) {
    let divs = document.createElement('div');
    divs.classList.add('sketchDiv');
    sketch.appendChild(divs);
    reset.addEventListener("click", function() {
        divs.style.backgroundColor = "white";
    });
    divs.onmouseenter = function() {
        switch(colorSelector.value) {
            case 'black':
                divs.style.backgroundColor = "black";
                break;
            case 'yellow':
                divs.style.backgroundColor = "yellow";
                break;
            case 'red':
                divs.style.backgroundColor = "red";
                break;
            case 'blue':
                divs.style.backgroundColor = "blue";
                break;
            case 'green':
                divs.style.backgroundColor = "green";
                break;
            case 'random':
                divs.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                break;
            default:
                divs.style.backgroundColor = "black";
                break;
        }
    };
}

numOfSquares.addEventListener("click", function() {
    let x = prompt("Enter a number between 1 and 100");
    if (x >= 1 && x <= 100 && x.match(reg)) {
        let y = x ** 2;
        sketch.innerHTML = "";
            for (i = 0; i < y; i++) {
                let divs = document.createElement('div');
                divs.classList.add('sketchDiv');
                sketch.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
                sketch.style.gridTemplateRows = `repeat(${x}, 1fr)`;
                sketch.appendChild(divs);
                reset.addEventListener("click", function() {
                    divs.style.backgroundColor = "white";
                });
                divs.onmouseenter = function() {
                    switch(colorSelector.value) {
                        case 'black':
                            divs.style.backgroundColor = "black";
                            break;
                        case 'yellow':
                            divs.style.backgroundColor = "yellow";
                            break;
                        case 'red':
                            divs.style.backgroundColor = "red";
                            break;
                        case 'blue':
                            divs.style.backgroundColor = "blue";
                            break;
                        case 'green':
                            divs.style.backgroundColor = "green";
                            break;
                        case 'random':
                            divs.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                            break;
                        default:
                            divs.style.backgroundColor = "black";
                            break;               
                    }
                };
            }
    } else {
        alert("no thanks");
    };
});


/* 
    -only color when mouse clicked
    - 

*/