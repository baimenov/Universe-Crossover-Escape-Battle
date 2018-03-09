var AM = new AssetManager();
var snd = new Audio("./sounds/mk.mp3");
snd.volume = .05
snd.play();



function Background(game, spritesheet) {
	this.game = game;
	this.spritesheet = spritesheet;
	this.ctx = game.ctx;
	this.x = 0;
	this.y = 0;
}


Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.draw = function(ctx, xView, yView) {
	// easiest way: draw the entire map changing only the destination coordinate in canvas
	// canvas will cull the image by itself (no performance gaps -> in hardware accelerated environments, at least)
	// context.drawImage(this.image, 0, 0, this.image.width, this.image.height, -xView, -yView, this.image.width, this.image.height);
	
	// didactic way:
	// var sx, sy, dx, dy;
	// var sWidth, sHeight, dWidth, dHeight;
	
	// // offset point to crop the image
	// sx = xView;
	// sy = yView;
	
	// // dimensions of cropped image			
	// sWidth =  ctx.canvas.width;
	// sHeight = ctx.canvas.height;

	// // if cropped image is smaller than canvas we need to change the source dimensions
	// if(3840 - sx < sWidth){ // Hardcoding: this.image.width == 3840
	// 	sWidth = 3840 - sx;
	// }
	// if(720 - sy < sHeight){
	// 	sHeight = 720 - sy; 
	// }
	
	// // location on canvas to draw the croped image
	// dx = 0;
	// dy = 0;
	// // match destination with source to not scale the image
	// dWidth = sWidth;
	// dHeight = sHeight;									
	
	ctx.drawImage(this.spritesheet, this.x - xView, this.y - yView);
}						

Background.prototype.update = function() {

}

Background.prototype.setNew = function(img) {
	this.spritesheet = img;
}


/* KHOA:
	wrapper class for side scrolling background
*/
// possibles axis to move the camera
function Rectangle(left, top, width, height){
	this.left = left || 0;
	this.top = top || 0;
    this.width = width || 0;
	this.height = height || 0;
	this.right = this.left + this.width;
	this.bottom = this.top + this.height;
}

Rectangle.prototype = new Entity();
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.set = function(left, top, /*optional*/width, /*optional*/height){
	this.left = left;
    this.top = top;
    this.width = width || this.width;
    this.height = height || this.height
    this.right = (this.left + this.width);
    this.bottom = (this.top + this.height);
}

Rectangle.prototype.within = function(r) {
	return (r.left <= this.left && 
			r.right >= this.right &&
			r.top <= this.top && 
			r.bottom >= this.bottom);
}		

Rectangle.prototype.overlaps = function(r) {
	return (this.left < r.right && 
			r.left < this.right && 
			this.top < r.bottom &&
			r.top < this.bottom);
}

// possibles axis to move the camera
var AXIS = {
	NONE: "none", 
	HORIZONTAL: "horizontal", 
	VERTICAL: "vertical", 
	BOTH: "both"
};

// Camera constructor
function Camera(xView, yView, canvasWidth, canvasHeight, worldWidth, worldHeight, gameEngine)
{
	// position of camera (left-top coordinate)
	this.xView = xView || 0;
	this.yView = yView || 0;
	
	// distance from followed object to border before camera starts move
	this.xDeadZone = 0; // min distance to horizontal borders
	this.yDeadZone = 0; // min distance to vertical borders
	
	// viewport dimensions
	this.wView = canvasWidth;
	this.hView = canvasHeight;			
	
	// allow camera to move in vertical and horizontal axis
	this.axis = AXIS.BOTH;	

	// object that should be followed
	this.followed = null;
	
	// rectangle that represents the viewport
	this.viewportRect = new Rectangle(this.xView, this.yView, this.wView, this.hView);		
						
	// rectangle that represents the world's boundary (room's boundary)
	this.worldRect = new Rectangle(0, 0, worldWidth, worldHeight);

	this.gameEngine = gameEngine;
	
}

Camera.prototype = new Entity();
Camera.prototype.constructor = Camera;

// gameObject needs to have "x" and "y" properties (as world(or room) position)
Camera.prototype.follow = function(gameObject, xDeadZone, yDeadZone)
{		
	this.followed = gameObject;	
	this.xDeadZone = xDeadZone;
	this.yDeadZone = yDeadZone;
}					

Camera.prototype.update = function() {
	// keep following the player (or other desired object)
	if(this.followed != null)
	{		
		if(this.axis == AXIS.HORIZONTAL || this.axis == AXIS.BOTH)
		{		
			// moves camera on horizontal axis based on followed object position
			if(this.followed.x - this.xView  + this.xDeadZone > this.wView)
				this.xView = this.followed.x - (this.wView - this.xDeadZone);
			else if(this.followed.x  - this.xDeadZone < this.xView)
				this.xView = this.followed.x  - this.xDeadZone;
			this.gameEngine.xView = this.xView;
			
		}
		if(this.axis == AXIS.VERTICAL || this.axis == AXIS.BOTH)
		{
			// moves camera on vertical axis based on followed object position
			if(this.followed.y - this.yView + this.yDeadZone > this.hView)
				this.yView = this.followed.y - (this.hView - this.yDeadZone);
			else if(this.followed.y - this.yDeadZone < this.yView)
				this.yView = this.followed.y - this.yDeadZone;
		}						
	}		
	
	// update viewportRect
	this.viewportRect.set(this.xView, this.yView);
	
	// don't let camera leaves the world's boundary
	if(!this.viewportRect.within(this.worldRect))
	{
		if(this.viewportRect.left < this.worldRect.left)
			this.xView = this.worldRect.left;
		if(this.viewportRect.top < this.worldRect.top)					
			this.yView = this.worldRect.top;
		if(this.viewportRect.right > this.worldRect.right)
			this.xView = this.worldRect.right - this.wView;
		if(this.viewportRect.bottom > this.worldRect.bottom)					
			this.yView = this.worldRect.bottom - this.hView;
	}
	this.gameEngine.xView = this.xView;
	
}	

Camera.prototype.draw = function() {
	
}



function Frame(startX, startY, frameWidth, frameHeight) {
	this.startX = startX;
	this.startY = startY;
	this.frameWidth = frameWidth;
	this.frameHeight = frameHeight;
}

function Box(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

Box.prototype.collide = function(other) {
	return (this.x < other.x + other.width
		&& this.x + this.width > other.x
		&& this.y < other.y + other.height
		&& this.y + this.height > other.y);
}

function HealthBar(hp, game, x, y) {
	this.hp = hp;
	this.color = "red";
	this.game = game;
	this.x = x;
	this.y = y;
}

HealthBar.prototype = new Entity();
HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.update = function() {

}

HealthBar.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.hp * 5, 20);
}

AM.queueDownload("./img/Scorpion.png");
AM.queueDownload("./img/ScorpionReverse.png");
AM.queueDownload("./img/Ken.png");
AM.queueDownload("./img/KenFlipped.png");
AM.queueDownload("./img/GameOver.png");
//AM.queueDownload("./img/CourtyardBackground.jpg");
AM.queueDownload("./img/CourtyardBackgroundX3.png");
AM.queueDownload("./img/StreetFighterBG.png");
AM.queueDownload("./img/Ryu.png");
AM.queueDownload("./img/RyuFlipped.png");
AM.queueDownload("./img/Subzero.png");
AM.queueDownload("./img/SubzeroReverse.png");

AM.queueDownload("./img/GokuSS.png");
AM.queueDownload("./img/GokuSSReverse.png");
AM.queueDownload("./img/Frieza.png");
AM.queueDownload("./img/FriezaReverse.png");
AM.queueDownload("./img/Saitama.png");
AM.queueDownload("./img/SaitamaReverse.png");
AM.queueDownload("./img/namekbgr.png");

var rand = 0;

AM.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");

	var stageCount = 0;

	var gameEngine = new GameEngine();
	gameEngine.Camera = Camera;
	gameEngine.Rectangle = Rectangle;
	var camera = new Camera(0, 0, canvas.width, canvas.height, 3840, 720, gameEngine);

	var mkbg = new Background(gameEngine, AM.getAsset("./img/CourtyardBackgroundX3.png"));
	var sfbg = new Background(gameEngine, AM.getAsset("./img/StreetFighterBG.png"));
	var dbbg = new Background(gameEngine, AM.getAsset("./img/namekbgr.png"));
	
	
	var scorpion = new Scorpion(gameEngine, 200, 420);
	var subzero = new Subzero(gameEngine, 1500, 420);
	var subzero2 = new Subzero(gameEngine, 4000, 420);
	subzero.isBot = true;
	subzero.speed = 3.3;
	subzero.healthBar.x = 740;
	subzero.healthBar.y = 20;
	subzero.healthBar.hp = 40;
	subzero2.isBot = true;
	subzero2.speed = 3.3;
	subzero2.healthBar.x = 740;
	subzero2.healthBar.y = 50;
	subzero2.healthBar.hp = 40;
	
	//var scorpionBot2 = new Scorpion(gameEngine, 3000, 420);
	
	var ken = new Ken(gameEngine, 1300, 420);
	var ken2 = new Ken(gameEngine, 4000, 420);
	var ryu = new Ryu(gameEngine, 200, 420);
	ken.isBot = true;
	ken.speed = 3.3;
	ken.healthBar.x = 740;
	ken.healthBar.y = 20;
	ken.healthBar.hp = 40;
	ken2.isBot = true;
	ken2.speed = 3.3;
	ken2.healthBar.x = 740;
	ken2.healthBar.y = 50;
	ken2.healthBar.hp = 40;







	var goku = new Goku(gameEngine, 200, 420);
	var frieza = new Frieza(gameEngine, 1300, 420);
	var frieza2 = new Frieza(gameEngine, 4000, 420);
	frieza.isBot = true;
	frieza.speed = 3.3;
	frieza.healthBar.x = 740;
	frieza.healthBar.y = 20;
	frieza.healthBar.hp = 40;
	frieza2.isBot = true;
	frieza2.speed = 3.3;
	frieza2.healthBar.x = 740;
	frieza2.healthBar.y = 50;
	frieza2.healthBar.hp = 40;


	var kenBot3 = new Frieza(gameEngine, 8300, 420);
    kenBot3.isBot = true;
    kenBot3.speed = 3;
    kenBot3.healthBar.x = 740;
    kenBot3.healthBar.y = 80;
    kenBot3.healthBar.hp = 110;


	var saitama = new Saitama(gameEngine, 200, 420);

	/*ken.isBot = true;
	subzero.isBot = true;
	
	scorpionBot2.isBot = true;
	scorpionBot2.healthBar.x = 740;
	scorpionBot2.healthBar.y = 50;
	subzero.speed = 3;
	scorpionBot2.speed = 3.76;
	subzero.healthBar.x = 740;
	subzero.healthBar.y = 20;

	*/
	


	
	// $('.enter_link').click(function() { 
    //     $(this).parent().fadeOut(500);
//  });


	//gameEngine.addEntity(bg);
	//gameEngine.addEntity(scorpion);
	//gameEngine.addEntity(camera);
	//gameEngine.addEntity(scorpionBot);


	if(localStorage.getItem("char") == "Goku") {
		gameEngine.addEntity(dbbg);
		gameEngine.addEntity(goku);
		gameEngine.addEntity(camera);
		goku.stage = 0;
		gameEngine.addEntity(frieza);
		gameEngine.addEntity(frieza2);

		camera.follow(goku, canvas.width/2, canvas.height/2);
		gameEngine.init(ctx);
		gameEngine.start();
	}
	if(localStorage.getItem("char") == "Scorpion") {
		gameEngine.addEntity(mkbg);
		gameEngine.addEntity(scorpion);
		gameEngine.addEntity(camera);
		scorpion.stage = 0;
		gameEngine.addEntity(subzero);
		gameEngine.addEntity(subzero2);

		camera.follow(scorpion, canvas.width/2, canvas.height/2);
		gameEngine.init(ctx);
		gameEngine.start();
		
	}
	if(localStorage.getItem("char") == "Ryu") {
		gameEngine.addEntity(sfbg);
		gameEngine.addEntity(ryu);
		gameEngine.addEntity(camera);
		ryu.stage = 0;
		gameEngine.addEntity(ken);
		gameEngine.addEntity(ken2);

		camera.follow(ryu, canvas.width/2, canvas.height/2);
		gameEngine.init(ctx);
		gameEngine.start();
	}
	if(localStorage.getItem("char") == "Saitama") {
		gameEngine.addEntity(dbbg);
		gameEngine.addEntity(saitama);
		gameEngine.addEntity(camera);
		saitama.stage = 0;
		ken.healthBar.hp = 110;
		subzero2.healthBar.hp = 110;
		gameEngine.addEntity(ken);
		gameEngine.addEntity(subzero2);
		gameEngine.addEntity(kenBot3);

		camera.follow(saitama, canvas.width/2, canvas.height/2);
		gameEngine.init(ctx);
		gameEngine.start();
	}

	//gameEngine.addEntity(scorpionBot2);
	// gameEngine.addEntity(gokku);
	//gameEngine.addEntity(subzero);
	//gameEngine.addEntity(ryu);
	//gameEngine.addEntity(ken);

	

})