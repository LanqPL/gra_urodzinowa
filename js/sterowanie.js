var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', './zdjecia/sky.png');
}

function create() {
}

function update() {
}

preload();