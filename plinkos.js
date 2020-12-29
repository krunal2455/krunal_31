class Plinkos{
    constructor(x,y,r){
      var options ={
          isStatic: true,
          restitution: 1,
          friction: 0
      }
      this.r = r;

      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
    }
    display(){
     var pos = this.body.positions;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER)
     noStroke();
     fill("white");
     ellipesMode(RADIUS);
     ellipes(0,0,this.r);
     pop();
    }
}