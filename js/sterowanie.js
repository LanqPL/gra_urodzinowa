//function game_sterowanie(){

	//setTimeout(function(){
	
	var config = {
	    type: Phaser.AUTO,
    	width: 790,
	    height: 470,
   		physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        		}
    	},
    	scene: {
        	preload: preload,
        	create: create,
        	update: update
    	}
	};

		var game = new Phaser.Game(config);

		var player;
		var platforms;
		var cursors;

		var stars;
		var score = 0;
		var scoreText;

		function preload(){
			this.load.image('sky','zdjecia/sky.png');
			this.load.image('star','modele/star.png');
			this.load.image('diamond','modele/diamond.png');
			this.load.image('ground','modele/platform.png');
			this.load.spritesheet('player','modele/baddie.jpg',{ frameWidth: 32, frameHeight: 48 });
		}

		function create() {
			this.add.image(345, 235, 'sky');

    		platforms = this.physics.add.staticGroup();

    		platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    		platforms.create(600, 400, 'ground');
    		platforms.create(50, 250, 'ground');
    		platforms.create(750, 220, 'ground');
			

			/*

		    player = game.add.sprite(32, game.world.height - 150, 'player');

		    game.physics.arcade.enable(player);

		    player.body.bounce.y = 0.2;
		    player.body.gravity.y = 300;
		    player.body.collideWorldBounds = true;

		    player.animations.add('left', [0, 1], 10, true);
		    player.animations.add('right', [2, 3], 10, true);

		    stars = game.add.group();

		    stars.enableBody = true;

		    for (var i = 0; i < 12; i++){
		        var star = stars.create(i * 70, 0, 'star');
		        star.body.gravity.y = 300;
		        star.body.bounce.y = 0.7 + Math.random() * 0.2;
		    }

		    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

		    cursors = game.input.keyboard.createCursorKeys();
		    */
		}

		function update() {
			/*
		    game.physics.arcade.collide(player, platforms);
		    game.physics.arcade.collide(stars, platforms);

		    game.physics.arcade.overlap(player, stars, collectStar, null, this);

		    player.body.velocity.x = 0;

		    if (cursors.left.isDown){
		        player.body.velocity.x = -150;
		        player.animations.play('left');
		    }
		    
		    else if (cursors.right.isDown){
		        player.body.velocity.x = 150;
		        player.animations.play('right');
		    }

		    else{
		        player.animations.stop();
		        player.frame = 4;
		    }
		    
			    if(cursors.up.isDown && player.body.touching.down){
			    	player.body.velocity.y = -350;
				}
		*/
		}

		create();

		/*function collectStar (player, star) {
		    star.kill();
		    score += 10;
		    scoreText.text = 'Score: ' + score;
		
		}*/

		


	//preload();

	

	//},500);	
//}