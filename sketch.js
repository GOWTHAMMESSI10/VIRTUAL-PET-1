//Create variables here
var dog, happyDog;
var database;
var foodS;


function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg1.png")
  dog = loadImage("images/dogImg.png")

}

function setup() {
	createCanvas(500, 500);
 database= firebase.database();

 
 Dog = createSprite(250,250,10,40);
 Dog.addImage(dog);
 Dog.scale=0.7
 foodStock=database.ref("Food");
 foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    Dog.addImage(happyDog);
    
  }


  drawSprites();
  //add styles here
  textSize(25)
  fill("red")
  stroke(2)
  text("press up arrow to feed the dog",230,50)
}

function readStock (data) {
  foodS=data.val();
}

function writeStock (x) {
  database.ref('/').update({
    Food:x
  })
}

