// spreading all buttons to an array
const buttons = [...document.querySelectorAll('button')];
 // checking for possibilty of winning
 const WINNING_INDEXES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
]

let currentPlayer = 'X'

function handleBtnClick(event){
  // passing a value to the currentTarget of each buttons clicked
  event.currentTarget.textContent = currentPlayer
  event.currentTarget.disabled = true
  // apply tenary to change current player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'

  // checking winning posibilites
  for(const indexes of WINNING_INDEXES){
    const first = buttons[indexes[0]].textContent
    console.log(first)
    /* checking the value of the indexes of each buttons eqauls 'x' or 'o'
    * also checking if first has a value and returns true
    */
   if(first && indexes.every(index => buttons[index].textContent === first)){
     return alert(`${first} Won!!`)
   }
  }

 
  
}

// looping through buttons to run function
buttons.forEach(button => {
  button.addEventListener('click', handleBtnClick)
})