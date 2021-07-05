const board = document.querySelector("#board");
const reset = document.querySelector("#reset");
const colorButton = document.querySelector("#color");
const shadingButton = document.querySelector("#shading");

let gridSize = 16;

function increaseOpacity(rgbString) 
{
    let rgb = rgbString.substring(rgbString.indexOf("(")+1,rgbString.indexOf(")")).split(",");
    
    if(rgb[rgb.length-1] !== "1")
    {
        rgb[rgb.length-1] = +rgb[rgb.length - 1] + 0.1
    }
    return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})`;
}

const blueColorFunc = function (event) 
{
    event.target.style.backgroundColor = "blue";
}

const randomColorFunc = function (event) 
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    event.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`
}

const shadingFunc = function (event) 
{
    let color = event.target.style.backgroundColor;
    if(!color)
    {
        event.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    else
    {
        console.log(color);
        event.target.style.backgroundColor = increaseOpacity(color);
    }
}

function removeCells()
{
    while(board.firstChild)
    {
        board.removeChild(board.firstChild);
    }
}

function createGrid(number, funcObject)
{
    board.style.gridTemplateColumns = `repeat(${number},1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for(let i = 0; i < number**2; i++)
    {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.addEventListener("mouseover", funcObject)
        board.appendChild(div);
    }
}

function main()
{
    createGrid(gridSize, blueColorFunc);

    colorButton.addEventListener("click", (event) => {
        removeCells();
        createGrid(gridSize, randomColorFunc);
    })

    shadingButton.addEventListener("click", (event) => {
        removeCells();
        createGrid(gridSize, shadingFunc);
    })

    reset.addEventListener("click", (event) => {
        let size = prompt("Select size of grid: ");

        if(!(+size) || size < 0 || size > 100){
            removeCells();
            createGrid(16, blueColorFunc);
        }
        else
        {
            gridSize = size;
            removeCells();
            createGrid(size, blueColorFunc);
        }
    })
}

main();






