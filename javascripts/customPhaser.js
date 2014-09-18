var game = new Phaser.Game(800,700,Phaser.AUTO, '', {preload: preload, create: create});

function preload(){
	game.load.image('diamond', './assets/diamond.png');


}

function create(){
game.stage.backgroundColor = 0x2d2d2d;

    var d1 = game.add.sprite(100, 100, 'diamond');
    var d2 = game.add.sprite(100, 200, 'diamond');
    var d3 = game.add.sprite(100, 300, 'diamond');
    var d4 = game.add.sprite(100, 400, 'diamond');
    var d5 = game.add.sprite(100, 500, 'diamond');
    var d6 = game.add.sprite(100, 600, 'diamond');


    //  Here we'll chain 4 different tweens together and play through them all in a loop
    var tween = game.add.tween(d1).to({ x: 600 }, 4000, Phaser.Easing.Linear.None)
    .to({ x: 100 }, 2000, Phaser.Easing.Linear.None)
    .loop()
    .start();

    var tween = game.add.tween(d2).to({ x: 600 }, 4000, Phaser.Easing.Exponential.In)
    .to({ x: 100 }, 2000, Phaser.Easing.Exponential.Out)
    .loop()
    .start();
    
    var tween = game.add.tween(d3).to({ x: 600 }, 4000, Phaser.Easing.Elastic.In)
    .to({ x: 100 }, 2000, Phaser.Easing.Elastic.Out)
    .loop()
    .start();
    
    var tween = game.add.tween(d4).to({ x: 600 }, 4000, Phaser.Easing.Quadratic.In)
    .to({ x: 100 }, 2000, Phaser.Easing.Quadratic.Out)
    .loop()
    .start();

	var tween = game.add.tween(d5).to({ x: 600 }, 4000, Phaser.Easing.Circular.In)
    .to({ x: 100 }, 2000, Phaser.Easing.Circular.Out)
    .loop()
    .start();

    var tween = game.add.tween(d6).to({ x: 600 }, 4000, Phaser.Easing.Cubic.In)
    .to({ x: 100 }, 2000, Phaser.Easing.Cubic.Out)
    .loop()
    .start();

}