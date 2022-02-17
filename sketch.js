var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distanceX = 0;
var distanceY = 0;
var database;
var pared;

var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;

function preload(){
  forest = loadImage("images/Forest1.png");
  bear1_img = loadImage("images/Bear1.png");
  bear2_img = loadImage("images/Bear2.png");
  bear3_img = loadImage("images/Bear3.png");
}


function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}
