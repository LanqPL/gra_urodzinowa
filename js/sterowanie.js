function game_sterowanie(){
	setTimeout(function(){
		var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

		function preload() {
			game.load.image('sky', 'zdjecia/sky.png');
			ggame.load.image('star', 'modele/star.png');
			game.load.image('diamond', 'modele/diamond.png')
		}

		function create() {
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.add.sprite(0, 0, 'sky');
			platforms = game.add.group();
		}

		function update() {

		}

		preload();
	},500);	
}

