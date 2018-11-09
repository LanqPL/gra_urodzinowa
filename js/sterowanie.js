var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
	this.load.image('sky', 'zdjecia/sky.png');
    this.load.image('ground', 'modele/platform.png');
    this.load.image('star', 'modele/star.png');
    this.load.image('bomb', 'modele/bomb.png');
    this.load.spritesheet('dude', 
        'modele/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
	this.add.image(400,300,'sky');
}

function update ()
{
}

create();