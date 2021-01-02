class Chain{
constructor(bodyA,bodyB,offsetX,offsetY){
this.offsetX=offsetX
this.offsetY=offsetY

    var options={
bodyA:bodyA,
bodyB:bodyB,
pointA:{x:this.offsetX,y:this.offsetY},
length:150,
stiffness:0.07

 }
this.body=Constraint.create(options)
World.add(world,this.body)

}
display(){
var posA =this.body.bodyA.position
var posB=this.body.bodyB.position
var s1=posA.x
var s2=posA.y
var t1=posB.x+this.offsetX
var t2=posB.y+this.offsetY
strokeWeight(2)
line(s1,s2,t1,t2)
}}