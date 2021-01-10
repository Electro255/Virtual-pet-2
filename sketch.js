//Create variables here
var dogImg, happyDog;
var foodS, foodStock;
var database;
var readStock;
var writeStock;
var milk;
var foodbutton;
var addFoodbutton;
var fedTime;
var lastFed;
var foodObj;

function preload() {
    //load images here
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {
  background(46, 139, 87); 
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
        noStroke();
        textSize(21);
        fill("white");
        text("Food Remaining:  " + foodS, width-390, 230);

}

function readStock(data){
  console.log("read");
  foodS = data.val();
}

function writeStock(x){
    if(x<=0){
      x = 0;
    }else{
      console.log("write");
      x = x-1;
    }

    database.ref('/').update({
      Food:x
    })

}



