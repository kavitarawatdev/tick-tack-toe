const boxes = document.querySelectorAll(".box");
let newGame_btns = document.querySelectorAll(".newGame-btn");
let message_section = document.querySelector(".message-section"); 
let message = document.querySelector(".message");
let countclick = 0 ;

// winning patterns formed in game
const winPatterns =[
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

// ==================================
// code for reset game
// ========================================

// function for enabling boxes
const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "",
        message_section.classList.add("hidden");
        box.style.backgroundColor="var(--box)";
    }
};

// function for reset game
const resetGame =() => {
    countclick = 0;
    enablebox();
}

// function for winner announcement
const showWinner = (winner) => {
    message.innerHTML = `Congratulations,\n WINNER is ${winner}.`; 
    message_section.classList.remove("hidden"); 
    disablebox(); 
};

newGame_btns.forEach(btn=>{
    btn.addEventListener("click", resetGame);
})

// ==================================
// code for check winner
// ========================================

// function for checking winner
const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== ""  && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};

// function for disable box
const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    };
};

// function for checking match drawn
const draw = () => {
    if (countclick === 9 && !checkWinner()){
        message.innerHTML = `Match was DRAW.`; 
        message_section.classList.remove("hidden"); 
        disablebox(); 
    };
};

// ======================================
// function for game play
// ========================================
// turn of player 1
let turnA = true;

boxes.forEach((box) => {
    
    /* adding event listener for activating buttons for playing turn by turn 
     and then disabling buttons once clicked */
    box.addEventListener("click",(e) => {
        if (turnA === true){
            box.innerText = "X";
            turnA = false;
            // changing background color of boxes while playing
            box.style.backgroundColor="teal";
        }else{
            box.innerText = "O";
            turnA= true;           
            // changing background color of boxes while playing 
            box.style.backgroundColor="brown";
        }
        countclick++ ;
        box.disabled = true;
        checkWinner();
        draw();
    });
});
// ==================================
// 
// ========================================
// ==================================
// 
// ========================================
// ==================================
// 
// ========================================