 import phaser from 'phaser'



 const config = {
   type: Phaser.AUTO,
   width:800,
   height:600,
   physics: {
     default:'arcade',
     arcade:{
       gravity:{
         y:200
       }
     }
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
 let totalDelta = null;
 function create(params) {
   this.add.image(0,0,'sky').setOrigin(0,0)
   bird = this.physics.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0.5,0.5)
 }

 
//60fps
 function update(time, delta){
  totalDelta += delta
  //console.log(totalDelta)
  if (totalDelta < 1000) {return;
  }
  console.log(bird.body.velocity.y)
  totalDelta = 0
 }
 
new Phaser.Game(config);