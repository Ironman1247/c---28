class Paper{

    constructor(x,y){

        var options={
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }
         
        this.body = Bodies.circle(250,540,20,options);
        this.x = x
        this.y = y
        this.width = 33
        this.height = 10
         
        this.image = loadImage("paper.png")

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER)
        fill("white");
         image(this.image,pos.x,pos.y,70,70)
        pop();
    }
}
