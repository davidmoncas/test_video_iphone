const config={
	scale: {
        mode: Phaser.Scale.FIT,
		parent : 'gameContainer',
		autoCenter: Phaser.Scale.CENTER_BOTH,	
		width:888,
		height: 520
	},
	dom: {
        createContainer: true
    },
	pixelArt: true,
	type: Phaser.AUTO,
	scene: [ loading , intro_1],
	transparent: true,
	// audio: {
	// 	disableWebAudio: true,
    // }
}

var Game;
function initGame(){
	Game=new Phaser.Game(config);
}


initGame();