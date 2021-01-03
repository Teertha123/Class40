var canvas, backgroundImage;
var car1image,car2image,car3image,car4image,groundimage,trackimage,trach2image;
var finishedPlayers=0, passedFinish;
var gold, silver,bronze;

function preload(){
  car1image=loadImage("images/car1.png");
  car2image=loadImage("images/car2.png");
  car3image=loadImage("images/car3.png");
  car4image=loadImage("images/car4.png");
  groundimage=loadImage("images/ground.png");
  trackimage=loadImage("images/track.jpg");
  gold=loadImage("images/gold.png");
  silver=loadImage("images/silver.png");
  bronze=loadImage("images/bronze.png");
  
}

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(200,200,255)
  if(playerCount === 4 && finishedPlayers===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2);
  }
  if(gameState===2 && finishedPlayers===4){
    game.displayRank();
  }
}
