class coin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        
        this.body=createSprite(this.x,this.y,50,50)
        this.image=loadImage("coin.png");
        this.body.scale = 0.6
        coingrp.add(this.body)
    }
display(){
    //imageMode(CENTER);
    this.body.addImage(this.image)
}

// static destroyCoins(){
//     for(var i=0;i<coingrp.length;i++){
      
//         if(coingrp.get(i).isTouching(man)){
//             console.log("coingrp")
//             console.log(coingrp.get(i))
//             coingrp.get(i).destroy(this.body);
//         }
//     }
// }
    
}