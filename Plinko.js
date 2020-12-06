class Plinko {
    constructor(x, y, r) {
      var options = {
         isStatic:true
      }
      this.r=r

      this.body = Bodies.circle(x, y, this.r, options);
      this.color=color(random(0,255),random(0.255), random(0.255));
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      noStroke();
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
