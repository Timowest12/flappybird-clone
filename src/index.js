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
      create
   }
 }
 function preload(params) {
    this.load.image('sky','assets/sky.png')
    this.load.image('bird','assets/bird.png')
 }
 function create(params) {
   this.add.image(0,0,'sky').setOrigin(0,0)
   this.add.sprite(config.width/10,config.height/2,'bird').setOrigin(0.5,0.5)
 }
 
new Phaser.Game(config);