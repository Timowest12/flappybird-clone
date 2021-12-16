 import phaser from 'phaser'



 const config = {
   type: Phaser.AUTO,
   width:800,
   height:600,
   physics: {
     default:'arcade'
   },
   scene:{
      preload,
      create,
      update
   }
 }
 function preload(params) {
    this.load.image('sky','assets/sky.png')
    this.load.image('bird','assets/bird.png')
 }

 let bird = null;
 function create(params) {
   this.add.image(0,0,'sky').setOrigin(0,0)
   bird = this.physics.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0.5,0.5)
   bird.body.velocity.y = 200
   console.log(bird.body)
 }
//60fps
 function update(time, delta){
  console.log(delta)
  //delta time = miniseconds
 }
 
new Phaser.Game(config);