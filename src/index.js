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

 }
 function create(params) {
 
 }
 
new Phaser.Game(config);