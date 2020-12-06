var particles = []
var plinko = []
var division = []
var ground
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  for(var k = 0; k <=width; k = k+80){
    division.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight));
  }
  for (var j = 40; j <=width; j=j+50)
  {
    pinkoes.push(new Plinko(j,75));
  }

  for (var x = 15; x <=width-10; x=x+50){
    plinko.push(new Plinko(x,175));
  }
  for(var y = 0; y < particles.length; y++) {
    particles[y].display();
  }
  for (var z = 0; z < divisions.length; z++) {
    divisions[z].display();
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10, 10, 10)))
  }
  


  drawSprites();
}