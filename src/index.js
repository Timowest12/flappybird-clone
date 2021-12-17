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
const PIPES_TO_RENDER = 100
 
 let bird = null;
 let pipeHorizontalDistance = null

 const pipeVerticalDistanceRange = [150,250]
 
 
 

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

for (let i = 0; i < PIPES_TO_RENDER; i++) {
  const upperPipe = this.physics.add.sprite(0,0,'pipe').setOrigin(0,1)
   const LowerPipe = this.physics.add.sprite(0,0,'pipe').setOrigin(0,0)

   placePipe(upperPipe,LowerPipe)
}
   

/*    pipe.x = 100
   pipe.y = pipe.height */
  
   this.input.on('pointerdown',flap)
   this.input.keyboard.on('keydown_SPACE',flap)
  }

 
//60fps
 function update(time, delta){
 if (bird.y > config.height + bird.height|| bird.y  < 0 - bird.height) {
   restartBirdPosition()
 }
 }

 function placePipe(uPipe,lPipe) {
  pipeHorizontalDistance += 400
  let pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalDistanceRange)
  let pipeVerticalPosition = Phaser.Math.Between(0 + 20,config.height - 20 - pipeVerticalDistance)


    uPipe.x = pipeHorizontalDistance
    uPipe.y = pipeVerticalPosition

    lPipe.x = uPipe.x
    lPipe.y = uPipe.y + pipeVerticalDistance

    lPipe.body.velocity.x = -200
    uPipe.body.velocity.x = -200
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