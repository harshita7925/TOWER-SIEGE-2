class Block {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility=255;

      }
      display(){

        /*if(this.body.speed<3){
          }
          else{
            World.remove(world, this.body);
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            pop();
          }*/
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
      }
    }
    
