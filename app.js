let turn = 'O';
let total_turn = 0;


let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let board_array = new Array(9).fill("E");
function checkWinner(){
      for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }
    return 0;
}

const printer = (event)=>{
   
    const element = event.target;
    if(board_array[element.id]==="E") 
   {
    total_turn++;
    if(turn==='O')
    {
        element.innerHTML = "O";
        board_array[element.id] = "O";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            board.removeEventListener('click',printer);
            return;
        }
        turn = "X";
    }
    else{
        element.innerHTML = "X";
        board_array[element.id] = "X";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            board.removeEventListener('click',printer);
            return;
        }
        turn = "O";
    }

    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML = "Match is Draw";
        board.removeEventListener('click',printer);
    }

  }   
}
const board = document.querySelector('.board');
board.addEventListener('click',printer);

const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })
   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.addEventListener('click',printer);

})