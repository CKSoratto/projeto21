class Ground {

  constructor(x, y, width, height){

    var options={

     isStatic: true

    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;
    World.add(world, this.body);

  }
  
  display(){

    push();

    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(127, 54, 74);
    rect(0, 0, this.width, this.height);

    pop();

  }

}
