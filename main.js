var AM = new AssetManager();


function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
	frames, loop, reverse, saveLast, readyFrames) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.startX = startX;
    this.startY = startY;
    this.saveLast = saveLast;
    this.reverse = reverse;
    this.readyFrames= readyFrames;
    //Scorpion's actual width. 
    this.actualWidth = 58;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy) {
	var scaleBy = scaleBy || 1;
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    } 
    
    if (!this.readyFrames) {
	    var frame = this.currentFrame();
	    var lastFrame = this.frames - 1;
	    if (this.saveLast) {
	    	frame = lastFrame;
	    }

	    var index = this.reverse ? this.frames - frame - 1 : frame;
	    var vindex = 0;
	    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
	        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
	        vindex++;
	    }
	    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
	        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
	        vindex++;
	    }
	    var locX = x;
	    var locY = y;
	    var offset = vindex === 0 ? this.startX : 0;
	    ctx.drawImage(this.spriteSheet,
	                  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
	                  this.frameWidth, this.frameHeight,
	                  locX, locY,
	                  this.frameWidth * scaleBy,
	                  this.frameHeight * scaleBy);
	} else {
		var frame = this.currentFrame();
		var lastFrame = this.frames - 1;
		if (this.saveLast && this.isDone()) {
	    	frame = lastFrame;
	    }

	    var index = frame % this.frames;
	    var vindex = 0;
	    var locX = x;
	    var locY = y;
	    var offset = vindex === 0 ? this.startX : 0;

	    var sx = this.reverse ? this.spriteSheet.width - this.readyFrames[index].startX -
	    						this.readyFrames[index].frameWidth : this.readyFrames[index].startX;
	    
	    var sy = this.readyFrames[index].startY;
	    
	    if (this.reverse) {
	    	
	    	var xDiff = this.readyFrames[index].frameWidth - this.actualWidth;
	    	locX = xDiff <= 0 ? x : x - (xDiff * scaleBy);
	    }

	    
	    ctx.drawImage(this.spriteSheet,
	    			  sx, sy,
	    			  this.readyFrames[index].frameWidth, this.readyFrames[index].frameHeight,
	    			  locX, locY,
	    			  this.readyFrames[index].frameWidth * scaleBy, this.readyFrames[index].frameHeight * scaleBy);
	}
    
    
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

Animation.prototype.revesrse = function() {

}

function Background(game, spritesheet) {
	this.game = game;
	this.spritesheet = spritesheet;
	this.ctx = game.ctx;
	this.x = 0;
	this.y = 0;
}

Background.prototype = new Entity();
Background.prototype.constructor = Background;

Background.prototype.draw = function(ctx) {
	ctx.drawImage(this.spritesheet,
		this.x, this.y);
}

Background.prototype.update = function() {

}



function Frame(startX, startY, frameWidth, frameHeight) {
	this.startX = startX;
	this.startY = startY;
	this.frameWidth = frameWidth;
	this.frameHeight = frameHeight;
}

AM.queueDownload("./img/Scorpion.png");
AM.queueDownload("./img/ScorpionReverse.png");
AM.queueDownload("./img/CourtyardBackground.jpg");
AM.queueDownload("./img/GokuSS.png");
AM.queueDownload("./img/Ryu.png");
AM.queueDownload("./img/RyuFlipped.png");

AM.downloadAll(function () {
	var canvas = document.getElementById("gameWorld");
	var ctx = canvas.getContext("2d");

	var gameEngine = new GameEngine();
	var bg = new Background(gameEngine, AM.getAsset("./img/CourtyardBackground.jpg"));
	var gokku = new Gokku(gameEngine);
	var ryu = new Ryu(gameEngine);
	var scorpion = new Scorpion(gameEngine);
	

	gameEngine.addEntity(bg);
	gameEngine.addEntity(scorpion);
	//gameEngine.addEntity(gokku);
	//gameEngine.addEntity(ryu);

	gameEngine.init(ctx);
	gameEngine.start();
})