//Create variables here
var dog, happyDog, database, foodS, foodStock; 
var foodObj; 
var feed, addFood; 

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png"); 
}

function setup() {
	createCanvas(1000, 400);
  database = firebase.database();
  console.log(database);  
  foodObj = new Food(); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
 dog = createSprite(200,200,30,20);
 dog.addImage(dogImg);
 dog.scale = 0.5;
 feed = createButton ("feed dog"); 
 feed.position (700, 95); 
 feed.mousePressed (feedDog);

 addFood = createButton ("add food"); 
 addFood.position (800, 95); 
 addFood.mousePressed (addFoods);
}

function feedDog() {
 dog.addImage (dogImg1); 

}

function addFoods() { 

}

function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here

//Print foodStock from the database 
textSize (50); 
fill ("black"); 
}


function readStock(data){
  foodS=data.val();
}
//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}





