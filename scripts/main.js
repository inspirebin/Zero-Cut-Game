var game = new Phaser.Game(800,800,Phaser.AUTO,'game',{preload: preload,create: create,update: update});
function preload(){
game.load.image('zero','images/zero.png');
}

function create(){
var i=0,j=0,k=0;
console.log(i);
for(i=0;i<=500;i+=50){
 for(j=0;j<i;j+=50){
   var spr = game.add.sprite(j,i,'zero');
   spr.inputEnabled = true;
   spr.events.onInputDown.add(listener, this);
 }
}
    function listener(){
    alert("fucker you clicked!");
    }
}

function update(){
 if(game.input.mousePointer.isDown){
  console.log("yeah");
 }
}