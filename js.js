const layout = [
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
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
    0,0,0,0,0,0,0,0,0,0,1,4,1,1,1,1,4,1,0,0,0,0,0,0,0,0,0,0,
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
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    
   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,
    1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,
    1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,
    1,0,0,1,0,0,4,0,0,0,0,0,1,0,0,1,0,0,0,0,0,4,0,0,1,0,0,1,
    1,1,1,1,1,4,3,4,1,1,1,1,1,1,1,1,1,1,1,1,4,3,4,1,1,1,1,1,
    1,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,
    1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,0,0,0,1,4,0,0,0,0,1,0,0,1,0,0,0,0,4,1,0,0,0,1,0,1,
    1,0,1,1,0,0,1,4,0,1,1,4,1,1,4,1,4,1,1,0,4,1,0,0,1,1,0,1,
    1,0,0,0,0,0,0,4,0,1,0,4,4,2,2,1,4,0,1,0,4,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,4,0,1,0,4,1,2,2,4,4,0,1,0,4,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,4,0,1,0,4,1,4,1,1,4,0,1,0,4,0,0,0,0,0,0,0,
    1,1,1,1,1,1,1,4,0,1,0,4,4,4,4,4,4,0,1,0,4,1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,4,0,1,0,0,0,0,0,0,0,0,1,0,4,1,0,0,0,0,0,1,
    1,0,0,0,0,0,1,4,0,1,0,1,1,1,1,1,1,0,1,0,4,1,0,0,0,0,0,1,
    1,0,1,1,1,1,1,4,1,1,0,0,0,4,4,0,0,0,1,1,4,1,1,1,1,1,0,1,
    1,0,0,0,0,0,4,4,0,0,0,0,1,4,5,1,0,0,0,0,4,4,0,0,0,0,0,1,
    1,0,0,0,0,0,1,4,0,0,0,0,1,4,4,1,0,0,0,0,4,1,0,0,0,0,0,1,
    1,3,1,1,0,0,1,4,4,1,1,1,1,4,4,1,1,1,1,4,4,1,0,0,1,1,3,1,
    1,0,0,1,0,0,1,4,0,1,0,0,0,0,0,0,0,0,1,0,4,1,0,0,1,0,0,1,
    1,0,0,1,0,0,1,4,0,1,0,0,0,0,0,0,0,0,1,0,4,1,0,0,1,0,0,1,
    1,0,0,1,1,1,1,4,0,1,1,1,1,0,0,1,1,1,1,0,4,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
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
let pacStart;
let levelCurrent = 1;
let score = 0;
let lives = 3;
let game = true;
let flag = 0;
let foodCount = 0;
let time = 0;
let layoutnum = Math.floor(Math.random() * 2);
let wallnum = Math.floor(Math.random() * 3);
let walltype = "wall" + wallnum;

let images = new Array();
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image();
		images[i].src = preload.arguments[i];
		}
}
preload(
		"https://somesh37.github.io/Pacman/resources/bg2.png",
		"https://somesh37.github.io/Pacman/resources/food.png",
		"https://somesh37.github.io/Pacman/resources/g1.png",
		"https://somesh37.github.io/Pacman/resources/g2.png",
		"https://somesh37.github.io/Pacman/resources/g3.png",
		"https://somesh37.github.io/Pacman/resources/g4.png",
		"https://somesh37.github.io/Pacman/resources/gameover.png",
		"https://somesh37.github.io/Pacman/resources/gamepaused.png",
		"https://somesh37.github.io/Pacman/resources/gr.png",
		"https://somesh37.github.io/Pacman/resources/pac.gif",
		"https://somesh37.github.io/Pacman/resources/pac.png",
		"https://somesh37.github.io/Pacman/resources/pill.gif",
		"https://somesh37.github.io/Pacman/resources/wall.jpeg",
		"https://somesh37.github.io/Pacman/resources/wall1.jpeg",
		"https://somesh37.github.io/Pacman/resources/wall2.jpeg",
		"https://somesh37.github.io/Pacman/resources/win.png"
)
		
for (let i = 0; i < 784; i++) {
      const square = document.createElement('div');
      document.querySelector('.grid').appendChild(square);
      squares.push(square);}
      
createBoard(layoutnum);
function createBoard(layoutnum) {
    for (let i = 0; i < 784; i++) {
      if(layout[layoutnum][i] == 0) {
        squares[i].classList.add('food');
        foodCount++;
      } else if (layout[layoutnum][i] == 1) {
        squares[i].classList.add(walltype);
      } else if (layout[layoutnum][i] == 2) {
        squares[i].classList.add('ghost');
      } else if (layout[layoutnum][i] == 3) {
        squares[i].classList.add('pill');
        foodCount++;
      } else if (layout[layoutnum][i] == 5 ) {
        squares[i].classList.add('pac');
        pacStart=i;
      }
    }	
}
function removeBoard() {
    for (let i = 0; i < 784; i++) {
        squares[i].classList.remove('food', walltype, 'ghost', 'pill', 'pac');
        }	
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
    new ghost('g1', 321, 150),
    new ghost('g2', 349, 150),
    new ghost('g3', 322, 175),
    new ghost('g4', 350, 175)
]

const moves =  [-1, +1, 28, -28]

//ghosts on the board
ghosts.forEach(ghost => {squares[ghost.start].classList.add(ghost.name,'ghost')});
ghosts.forEach(ghost => {moveGhost(ghost)});

function moveGhost(ghost) {
    let nextmove = moves[Math.floor(Math.random() * moves.length)];

    ghost.ID = setInterval(function() {
      if  (    (ghost.current + nextmove + 1) % 28 !== 0
	       &&  (ghost.current + nextmove) >= 0
           &&  (ghost.current + nextmove)  < (28 * 28)
           &&  !squares[ghost.current + nextmove].classList.contains('ghost') 
           &&  !squares[ghost.current + nextmove].classList.contains(walltype) 
           ) {
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
        if (levelCurrent <= 2) score += 30;
        score += 70;
        scoreD();
        squares[ghost.current].classList.add('ghost');
      }
    checkForWin();
    checkForGameOver();
    }, ghost.speed);
}
//movement of pacman
pacCurrent = pacStart;
document.addEventListener('keydown', movePacman);
function movePacman(e) {
    squares[pacCurrent].classList.remove('pac');
    switch(e.keyCode) {
      case 37:
        if (squares[pacCurrent -1] === squares[363]) {pacCurrent = 391; break;}
        if(
          pacCurrent % 28 !== 0 &&
          !squares[pacCurrent -1].classList.contains(walltype) &&
          !squares[pacCurrent -1].classList.contains('ghost')
          ) pacCurrent -= 1; break;
      case 38:
        if(
          pacCurrent - 28 >= 0 &&
          !squares[pacCurrent -28].classList.contains(walltype) &&
          !squares[pacCurrent -28].classList.contains('ghost')
          ) {
             pacCurrent -= 28;
            }
        break;
      case 39:
        if (squares[pacCurrent +1] === squares[392]) {pacCurrent = 364; break;}
        if(
          pacCurrent % 28 < (28 - 1) &&
          !squares[pacCurrent +1].classList.contains(walltype) &&
          !squares[pacCurrent +1].classList.contains('ghost')
        ) pacCurrent += 1; break;
      case 40:
        if (
          pacCurrent + 28 < (28 * 28) &&
          !squares[pacCurrent +28].classList.contains(walltype) &&
          !squares[pacCurrent +28].classList.contains('ghost')
        ){
        pacCurrent += 28;
         }
        break;
    }
    squares[pacCurrent].classList.add('pac');
    foodEaten();
    pillEaten();
    checkForWin();
    checkForGameOver();
  }

//eat a food
function foodEaten() {
    if (squares[pacCurrent].classList.contains('food')) {
	  if (layoutnum == 0) score++;
      score++;
      scoreD();
      squares[pacCurrent].classList.remove('food');
      foodCount--;
    }
}

//eat a pill
function pillEaten() {
    if (squares[pacCurrent].classList.contains('pill')) {
      score +=10;
      scoreD();
      time = 0;
      flag = 1;
      setTimeout( function(){ 
		  ghosts.forEach(ghost => ghost.scared = true);
		  time = 11;
		  timer(time); }, 12 );
      squares[pacCurrent].classList.remove('pill');
      foodCount--;
    }
}

function checkForGameOver() {
    if (squares[pacCurrent].classList.contains('ghost') &&
      !squares[pacCurrent].classList.contains('scared-ghost')) {
      if (lives == 0){
      document.removeEventListener('keydown', movePacman);
      ghosts.forEach(ghost => clearInterval(ghost.ID));
      document.getElementById('something').classList.add('gameover');
      flag = 1;
	  }
      else {
		 lives--;
		 squares[pacCurrent].classList.remove('pac');	 
		 ghosts.forEach(ghost => {
			 squares[ghost.current].classList.remove(ghost.name, 'ghost', 'scared-ghost');
			 ghost.current = ghost.start;
			 squares[ghost.current].classList.add(ghost.name,'ghost')});
		 life(document.getElementById('b2'));
		 pacCurrent = pacStart; 
		 squares[pacCurrent].classList.add('pac');	 
	  }
    }
}

function checkForWin() {
    if (score >= 500 || foodCount == 0) {
	  ghosts.forEach(ghost => clearInterval(ghost.ID));
      document.removeEventListener('keydown', movePacman);
      document.getElementById('something').classList.add('win'); 
      time = 0;
      setTimeout( levelup , 3000 );
      flag = 1;
    }
}
function timer(o){
	let timeDisplay = 100*o - 1;
	let id = setInterval( function(){ 
		if ( timeDisplay == 0 || time == 0) {
			ghosts.forEach(ghost => ghost.scared = false); 
			flag = 0;
			time = 0;
			document.getElementById('time').innerHTML = 0;
			clearInterval(id);}
		document.getElementById('time').innerHTML = Math.floor(timeDisplay/100);
		timeDisplay -= 1;
		} , 10 );
}
function scoreD(){
	document.getElementById('score').innerHTML = score;
}
function levelup(){
	flag = 0;
	foodCount = 0;
	levelCurrent++;
	level(document.getElementById('b1'));
	document.getElementById('something').classList.remove('win'); 
	document.getElementById('time').innerHTML = 0;
	score = 0;
	scoreD();
	if (lives < 5){ 
		lives++; 
		life(document.getElementById('b2')); }
	ghosts.forEach(ghost => {
			 squares[ghost.current].classList.remove(ghost.name, 'ghost', 'scared-ghost');
			 ghost.scared = false;
			 ghost.current = ghost.start; 
			 if ( ghost.speed > 120 ) ghost.speed -= 20; });
    removeBoard();
    wallnum = Math.floor(Math.random() * 3);
	walltype = "wall" + wallnum;
    layoutnum++;
	if(layoutnum == 2) layoutnum = 0;
	createBoard(layoutnum);
	ghosts.forEach(ghost => {squares[ghost.start].classList.add(ghost.name,'ghost'); });
	ghosts.forEach(ghost => {moveGhost(ghost)});
	document.addEventListener('keydown', movePacman);
	pacCurrent = pacStart;
}
function over1(o){
	o.innerHTML = "New Game";
}
function over2(o){
	if(game == true && flag == 0) o.innerHTML = "Pause";
	if(game == false && flag == 0) o.innerHTML = "Continue";
}
function level(o){
	o.innerHTML = "Level: " + levelCurrent;
}
function life(o){
	o.innerHTML = "Life: " + lives;
}
function newgame(o){
	location.reload();
}
function pause(o){
    if(game == true && flag == 0){
	  document.removeEventListener('keydown', movePacman);
      ghosts.forEach(ghost => clearInterval(ghost.ID));
      o.innerHTML = "Continue";
      document.getElementById('something').classList.add('gamepaused'); 
      game = false;}
    else if(game == false && flag == 0){
	  document.addEventListener('keydown', movePacman);
      ghosts.forEach(ghost => {moveGhost(ghost)});
      o.innerHTML = "Pause";
      document.getElementById('something').classList.remove('gamepaused'); 
      game = true;}
}
