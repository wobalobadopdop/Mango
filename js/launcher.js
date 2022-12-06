class launcher{
    constructor(bodyA){
        var pointB = {x: 235, y:420};
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.portalGun = Constraint.create(options);
        World.add(world, this.portalGun);
    }
    attach(body){
        this.portalGun.bodyA = body;
    }
    
    fly(){
        this.portalGun.bodyA = null;
    }

    display(){

        var pointB = this.pointB;
        push();
        imageMode(CENTER);
        pop();

        if(this.portalGun.bodyA){
            
            var pointA = this.portalGun.bodyA.position;
            push();
            stroke(48,22,8);      
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           
            pop();
        }
    }
    
}

