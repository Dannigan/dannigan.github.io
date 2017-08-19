var player;
var playerImage;
var enemy;
var enemyImage;
var enemy2;
var enemy2Image
var isGameOver;
var backgroundImage;

function preload() {
  playerImage = loadImage("https://i.imgur.com/N5uCbDu.png");
  enemyImage = loadImage("https://i.imgur.com/OdL0XPt.png");
  enemy2Image = loadImage("https://i.imgur.com/OdL0XPt.png");
  backgroundImage = loadImage("https://i.imgur.com/aKQOg3G.png")
}
  
  
function setup() {
  isGameOver = false;
  createCanvas(506, 50c6);
  enemy = createSprite(width/2, 0, 0, 0);
  enemy.addImage(enemyImage);
  enemy.rotationSpeed = 4.0;
  player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
  player.addImage(playerImage);
  enemy2 = createSprite(width/2, 0, 0, 0);
  enemy2.addImage(enemy2Image);
  enemy2.rotationSpeed = 4.0;
}

function draw() {
  background(0, 0, 100);
  drawSprites();
     if (isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)  || enemy2.overlap(player)) {
            isGameOver = true;
            
            
        
        }
  
    background(backgroundImage);
 
   if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
      player.position.x = player.position.x + 5;
   }

   if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
     player.position.x = player.position.x - 5;
   }
  
   if (keyDown(DOWN_ARROW) && player.position.y < (width - (playerImage.width/2))) {
     player.position.y = player.position.y + 5;
   }

   if (keyDown(UP_ARROW) && player.position.y > (playerImage.width/2)) {
      player.position.y = player.position.y - 5;
   }

  enemy.position.y = enemy.position.y +6;
  
   if (enemy.position.y > height) {
      enemy.position.y = 0;
      enemy.position.x = random(5, width-5);
   }
    
    drawSprites();
    
   enemy2.position.y = enemy2.position.y +6;
   
       if (enemy2.position.y > height) {
      enemy2.position.y = 0;
      enemy2.position.x = random(5, width-5);
  
   }
   
    drawSprites();
    }
}

  function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
  text ("Click anywhere to start again", width/2, 3*height/4);
  }

  function mouseClicked() {
    if (isGameOver) {
      isGameOver = false;
      player.position.x = width/2;
      player.position.y = height-(playerImage.height/2);
      enemy.position.x = random(5, width-5);
      enemy.position.y = 0;
      enemy2.position.x = random(5, width-5);
      enemy2.position.y = 0;
  }
}