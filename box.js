class Box {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.visiblity = 255
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 5) {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
      }
       else{
         World.remove(world, this.body)
         push();
         this.visiblity = this.visiblity - 5
         tint(255, this.visiblity);
         rect(this.image, this.body.position.x, this.body.position.y, 50, 50)
         pop();
       }
    
    }
  };
