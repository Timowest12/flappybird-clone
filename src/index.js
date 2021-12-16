 import phaser from 'phaser'



 const config = {
   type: Phaser.AUTO,
   width:800,
   height:600,
   physics: {
     default:'arcade',
     arcade:{
      gravity:{y:400},
      debug:true
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

 const VELOCITY = 200
 let bird = null;
 let flapVelocity = 250
 let totalDelta = null;

 function create(params) {
   this.add.image(0,0,'sky').setOrigin(0,0)
   bird = this.physics.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0.5,0.5)
  
   this.input.on('pointerdown',flap)
   this.input.keyboard.on('keydown_SPACE',flap)
  }

 
//60fps
 function update(time, delta){
 if (bird.y > config.height + bird.height|| bird.y  < 0 - bird.height) {
   alert('you lost!')
 }
 }

 function flap() {
   //debugger
   bird.body.velocity.y = -flapVelocity
 }
 
new Phaser.Game(config);