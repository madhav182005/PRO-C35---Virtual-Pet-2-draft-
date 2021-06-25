class Food {
   constructor() { 
      this.foodStock = 0; 
      this.lastFed = 0; 
      this.milkImage = loadImage ("images/Milk.png"); 
   }
  
   getFoodStock () { 
      database.ref("Food").on("value", data => {this.foodStock = data.val()}); 
   }
  
   updateFoodStock (x) {
      database.ref("/").update({
      Food:x
      })
   }
  
   deductFood () {
  
   }
  
   display() {
  
   }
  
  }
  