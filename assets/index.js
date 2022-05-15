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

class TicTacToe{

  constructor(currentPlayerElement, buttons){
    this.currentPlayerElement = currentPlayerElement
    this.buttons = buttons
    this.currentPlayer = 'X'
    // looping through buttons to run function
  this.buttons.forEach(button => {
    button.addEventListener('click', this.handleBtnClick.bind(this))
  })
  }

  // adding Methods
  handleBtnClick(event){
    // passing a value to the currentTarget of each buttons clicked
    event.currentTarget.textContent = this.currentPlayer
    event.currentTarget.disabled = true
    // apply tenary to change current player
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    this.currentPlayerElement.textContent = this.currentPlayer
  
    // checking winning posibilites
    for(const indexes of WINNING_INDEXES){
      const first = this.buttons[indexes[0]].textContent
  
      /* checking if all value of the indexes eqauls the first of value of the index
      * also checking if first has a value and returns true
      */
     if(first && indexes.every(index => this.buttons[index].textContent === first)){
       this.buttons.forEach(button => button.disabled = true);
       return alert(`${first} Won!!`);
     }
    }
    // Checking if every button in the buttons array is not empty
    if(this.buttons.every(button => button.textContent !== '')){
      return alert('Its a Draw')
    }
    
  } //End of handleBtnClick Method


}

// spreading all buttons to an array
const buttons = [...document.querySelectorAll('button')];
let currentPlayerElement = document.querySelector('#currentPlayer')


new TicTacToe(currentPlayerElement, buttons)




