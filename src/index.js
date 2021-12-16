 import phaser from 'phaser'



 const config = {
   type: Phaser.AUTO,
   width:800,
   height:600,
   physics: {
     default:'arcade',
     arcade:{

      debug:true
     }
   },
   scene:{
      preload,
      create,
      update
   }
 }

 const VELOCITY = 200
 let bird = null;
 let upperPipe = null;
 let LowerPipe = null;

 const pipeVerticalDistanceRange = [150,250]
 let pipeVerticalDistance = Phaser.Math.Between(pipeVerticalDistanceRange[0],pipeVerticalDistanceRange[1])
 

 const flapVelocity = 250
 const initialBirdPosition = {x:config.width/10,y:config.height/2}
 
 function preload(params) {
    this.load.image('sky','assets/sky.png')
    this.load.image('bird','assets/bird.png')
    this.load.image('pipe','assets/pipe.png')
 }



 function create(params) {
   this.add.image(0,0,'sky').setOrigin(0,0)
   //this.add.image(0,0,'pipe').setOrigin(0,0)
   bird = this.physics.add.sprite(initialBirdPosition.x,initialBirdPosition.y,'bird').setOrigin(0.5,0.5)
   bird.body.gravity.y = 400


   upperPipe = this.physics.add.sprite(400,100,'pipe').setOrigin(0,1)
   LowerPipe = this.physics.add.sprite(400,upperPipe.y + pipeVerticalDistance,'pipe').setOrigin(0,0)

   pipe.x = 100
   pipe.y = pipe.height
  
   this.input.on('pointerdown',flap)
   this.input.keyboard.on('keydown_SPACE',flap)
  }

 
//60fps
 function update(time, delta){
 if (bird.y > config.height + bird.height|| bird.y  < 0 - bird.height) {
   restartBirdPosition()
 }
 }

 function restartBirdPosition(){
  bird.x = initialBirdPosition.x
  bird.y = initialBirdPosition.y
  bird.body.velocity.y = 0
 }

 function flap() {
   //debugger
   bird.body.velocity.y = -flapVelocity
 }
 
new Phaser.Game(config);