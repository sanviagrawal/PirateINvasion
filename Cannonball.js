class Cannonball{
    constructor(x, y, r, angle) {
        var options={
            restititution:0.8,
            friction:1.0,
            density:1.0,
            isStatic:true

        }
        this.x = x;
        this.y = y;
       this.r=r;
       this.angle = angle;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("assets/cannonball.png");
        World.add(world,this.body)
      }
      shoot(){
        Matter.Body.setVelocity(this.body,{x:100,y:-40});
      }

      display(){
          var angle=this.body.angle;
          var pos=this.body.position;
        push () ;
        translate (pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop ()
     }
    
}