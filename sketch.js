var dog, happydog;
var database;
var foodS, foodStock;

//Create variables here

function preload() {
	dog = loadImage("dogImg.png");
  happydog = loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  dog = createSprite(450,250,150,150);
  dog.addImage(dog);
  dog.scale = 0.5;
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happydog);
  }

  textSize(20);
  text(white);
  text("Press the Up Arrow Key to Feed Drago Milk", 250, 50);
  
  drawSprites();
  //add styles here

}

//Function to read values from DB
function readStock(data) {
  foodS = data.val();
}

//Function to write values in DB
function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
}


