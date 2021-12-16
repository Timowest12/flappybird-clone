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

 
new Phaser.Game(config);