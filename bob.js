class Pp{
constructor(x,y){
   var options={
//isStatic:true,
restitution:0,
friction:0,
density:1.2,
frictionAir:0.0,
slop:1,
inertia:Infinity,

   }
 
this.body=Bodies.circle(x,y,40,options)
 this.radius=40
 

World.add(world,this.body)


}
display(){
    fill("red")
var pos=this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
ellipse(0,0,this.radius,this.radius)
pop()



}




}