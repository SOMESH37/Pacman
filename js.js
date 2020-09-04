const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,4,1,2,2,1,4,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,4,1,2,2,1,4,1,4,1,1,0,1,1,1,1,1,1,
    4,0,0,0,0,0,0,0,0,0,1,4,1,1,1,1,4,1,0,0,0,0,0,0,0,0,0,4,
    1,1,1,1,1,1,0,1,1,0,1,4,4,0,0,4,4,1,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,4,1,1,1,1,4,1,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,4,4,4,4,4,4,1,0,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
// 0 - food
// 1 - wall
// 2 - ghosts
// 3 - pill
// 4 - empty
// 5 - pacman
]
//create board
const squares = []
let pacCurrent;
let score = 0;
for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div');
      document.querySelector('.grid').appendChild(square);
      squares.push(square);}
let CB = setInterval(createBoard, 0);
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      if(layout[i] === 0) {
        squares[i].classList.add('food');
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall');
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost');
      } else if (layout[i] === 3) {
        squares[i].classList.add('pill');
      } else if (layout[i] === 5 ) {
        squares[i].classList.add('pac');
        pacCurrent=i;
      }
    }	clearInterval(CB);
}
//ghosts
class ghost {
    constructor(name, start, speed) {
      this.name = name;
      this.start = start;
      this.speed = speed;
      this.current = start;
      this.scared = false;
      this.ID ;
    }
}

ghosts = [
    new ghost('g1', 321, 250),
    new ghost('g2', 349, 350),
    new ghost('g3', 322, 300),
    new ghost('g4', 350, 200)
]

const moves =  [-1, +1, 28, -28]

//ghosts on the board
ghosts.forEach(ghost => {squares[ghost.current].classList.add(ghost.name,'ghost')});
ghosts.forEach(ghost => {moveGhost(ghost)});

function moveGhost(ghost) {
    let nextmove = moves[Math.floor(Math.random() * moves.length)];

    ghost.ID = setInterval(function() {
      if  (!squares[ghost.current + nextmove].classList.contains('ghost') 
           && !squares[ghost.current + nextmove].classList.contains('wall') ) {
          //transfer the ghost
          squares[ghost.current].classList.remove(ghost.name, 'ghost', 'scared-ghost');
          ghost.current += nextmove;
          squares[ghost.current].classList.add(ghost.name, 'ghost');
      
      } else nextmove = moves[Math.floor(Math.random() * moves.length)];

      if (ghost.scared) {
        squares[ghost.current].classList.add('scared-ghost');
      }

      //if the ghost is currently scared and pacman hits him
      if(ghost.scared && squares[ghost.current].classList.contains('pac')) {
        squares[ghost.current].classList.remove(ghost.name, 'ghost', 'scared-ghost');
        ghost.current = ghost.start;
        score +=50;
        document.getElementById('score').innerHTML = score;
        squares[ghost.current].classList.add('ghost');
      }
    checkForGameOver();
    checkForWin();
    }, ghost.speed);
}
//movement of pacman
function movePacman(e) {
    squares[pacCurrent].classList.remove('pac');
    switch(e.keyCode) {
      case 37:
        if(
          pacCurrent % 28 !== 0 &&
          !squares[pacCurrent -1].classList.contains('wall') &&
          !squares[pacCurrent -1].classList.contains('ghost')
          ){
        pacCurrent -= 1;
          }
        if (squares[pacCurrent-1] === squares[363]) {
          pacCurrent = 391;
        }
        break;
      case 38:
        if(
          pacCurrent - 28 >= 0 &&
          !squares[pacCurrent -28].classList.contains('wall') &&
          !squares[pacCurrent -28].classList.contains('ghost')
          ) {
             pacCurrent -= 28;
            }
        break;
      case 39:
        if(
          pacCurrent % 28 < 28 - 1 &&
          !squares[pacCurrent +1].classList.contains('wall') &&
          !squares[pacCurrent +1].classList.contains('ghost')
        ){
        pacCurrent += 1;         
           }
        if (squares[pacCurrent +1] === squares[392]) {
          pacCurrent = 364;
        }
        break;
      case 40:
        if (
          pacCurrent + 28 < (28 * 28) &&
          !squares[pacCurrent +28].classList.contains('wall') &&
          !squares[pacCurrent +28].classList.contains('ghost')
        ){
        pacCurrent += 28;
         }
        break;
    }
    squares[pacCurrent].classList.add('pac');
    foodEaten();
    pillEaten();
    checkForGameOver();
    checkForWin();
  }
document.addEventListener('keyup', movePacman);

//eat a food
function foodEaten() {
    if (squares[pacCurrent].classList.contains('food')) {
      score++;
      document.getElementById('score').innerHTML = score;
      squares[pacCurrent].classList.remove('food');
    }
}

//eat a pill
function pillEaten() {
    if (squares[pacCurrent].classList.contains('pill')) {
      score +=10;
      document.getElementById('score').innerHTML = score;
      ghosts.forEach(ghost => ghost.scared = true);
      setTimeout( function() { ghosts.forEach(ghost => ghost.scared = false); }, 10000);
      squares[pacCurrent].classList.remove('pill');
    }
}

function checkForGameOver() {
    if (squares[pacCurrent].classList.contains('ghost') &&
      !squares[pacCurrent].classList.contains('scared-ghost')) {
      document.removeEventListener('keyup', movePacman);
      ghosts.forEach(ghost => clearInterval(ghost.ID));
      document.getElementById('something').classList.add('gameover');
    }
}

function checkForWin() {
    if (score >= 500) {
	  ghosts.forEach(ghost => clearInterval(ghost.ID));
      document.removeEventListener('keyup', movePacman);
      document.getElementById('something').classList.add('win'); 
    }
}

