const board = document.querySelector("#board");
const reset = document.querySelector("#reset");

function removeCells()
{
    while(board.firstChild)
    {
        board.removeChild(board.firstChild);
    }
}

function createGrid(number)
{
    board.style.gridTemplateColumns = `repeat(${number},1fr)`;
    board.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for(let i = 0; i < number**2; i++)
    {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "blue";
        })
        board.appendChild(div);
    }
}

function main()
{
    createGrid(16);

    reset.addEventListener("click", (event) => {
        let size = prompt("Select size of grid: ");

        if(!(+size) || size < 0 || size > 80){
            removeCells();
            createGrid(16);
        }
        else
        {
            removeCells();
            createGrid(size);
        }
    })
}

main();






