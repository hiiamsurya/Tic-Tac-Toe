let boxes = document.querySelectorAll(".box");
let btn1 = document.querySelector("#btn1");
let msgContainer = document.querySelector(".msg-container")
let newBtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg");
let turnO = true;
const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked")
        if (turnO) {
            box.innerText = "O";
            turnO = false
        }
        else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;

       checkWinner();
    })  
});
const disableBox = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enableBox = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText=""
    }
}
const resetGames = () =>{
    turnO = true
    enableBox();
    msgContainer.classList.add("hide")
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation the Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox()

}

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
             if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("You Won the Game", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}
btn1.addEventListener("click", resetGames)
newBtn.addEventListener("click", resetGames)