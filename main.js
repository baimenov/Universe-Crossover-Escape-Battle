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
    } else if (this.isDone()) {
    	return;
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
		if (this.saveLast) {
	    	frame = lastFrame;
	    }

	    var index = frame % this.frames;
	    var vindex = 0;
	    var locX = x;
	    var locY = y;
	    var offset = vindex === 0 ? this.startX : 0;

	    var sx = this.reverse ? this.spriteSheet.width - this.readyFrames[index].startX -
	    						this.readyFrames[index].frameWidth : this.readyFrames[index].startX;
	    console.log(sx);
	    var sy = this.readyFrames[index].startY;
	    
	    if (this.reverse) {
	    	console.log("asd");
	    	var xDiff = this.readyFrames[index].frameWidth - this.actualWidth;
	    	locX = xDiff <= 0 ? x : x - (xDiff * scaleBy);
	    }

	    console.log(index);
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

/*Animation(spriteSheet, startX, startY, frameWidth, frameHeight, sheetWidth,
frameDuration, frames, loop, scale,  saveLast, reverse)*/
/*
	For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
*/
function Scorpion(game) {
	this.punchFrames = [new Frame(15, 322, 57, 128), new Frame(73, 322, 62, 128),
							 new Frame(139, 322, 77, 128)];

	//Actual width of Scorpion?
	this.actualWidth = 58;
	//this.x = x;
	//this.y = y;
	//this.game = game;
	//this.spritesheet = spritesheet;
	this.idleAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		88, 23, 58, 128, 0.10, 7, true, false, false, null);
	this.moveAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		18, 182, 57.5, 128, 0.10, 8, true,  false,  false, null);
	this.crouchAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		984, 23, 57.5, 128, 0.10, 2, false,  false, true, null);

	this.punchRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		15, 322, 57, 128, 0.05, 3, false, false, false, this.punchFrames);

	this.punchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		15, 322, 57, 128, 0.05, 3, false, true, false, this.punchFrames);

	

/*this.moveLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1743.5, 182, 57.5, 128, 0.10, 8, true,   false, true);*/
	this.moveLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1341, 182, 57.5, 128, 0.10, 8, true,   true, false, null);

/*this.idleLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1673, 23, 58, 128, 0.10, 7, true,  false, true);*/
	this.idleLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1325, 23, 58, 128, 0.10, 7, true,  true, false, null);
/*this.crouchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		777.5, 23,  57.5, 128, 0.10, 2, false,  true, true);*/
	this.crouchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		720, 23,  57.5, 128, 0.10, 2, false,  true, true, null);
	
	this.currentAnimation = this.idleAnimation;
	this.speed = 5;
	//this.ctx = game.ctx;
	
	this.movingRight = false;
	this.idling = true;
	this.crouching = false;
	this.movingLeft = false;
	this.punching = false;
	this.facing = "R";
	Entity.call(this, game, 50, 420);
}

Scorpion.prototype = new Entity();
Scorpion.prototype.constructor = Scorpion;



Scorpion.prototype.update = function() {
	//console.log(this.game.moveRight); 

	if (this.game.crouch) {

		this.crouching = true;
		this.idling = false;
		this.movingRight = false;
		this.movingLeft = false;
		this.punching = false;
	} else if (this.game.moveRight) {
		this.movingRight = true;
		this.idling = false;
		this.crouching = false;
		this.movingLeft = false;
		this.punching = false;
		this.facing = "R";
	} else if (this.game.moveLeft) {
		this.movingLeft = true;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.punching = false;
		this.facing = "L";
	} else if (this.game.punch) {
		this.punching = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
	} else  if (!this.game.moveRight && !this.game.crouch && !this.game.moveLeft
				&& !this.game.punch) {
		this.idling = true;
		this.movingRight = false;
		this.crouching = false;
		this.movingLeft = false;
		this.punching = false;
	} 



	//FUN EASTER EGG STUFF, BETTER TO REMOVE in prototype!
	//ULTRA SPEED is activated when "U" key is pressed
	//and deactivated when "U" is pressed again
	if (this.game.ultraSpeed) {
		this.speed += 0.1;
	} else {
		this.speed = 5;
	}

	if (this.movingRight) {
		this.currentAnimation = this.moveAnimation;

		if (this.x < 1160) {
			this.x += this.speed;
		}
		
		
	} else if (this.movingLeft) {
		this.currentAnimation = this.moveLeftAnimation;

		if (this.x >= 0) {
			this.x += -1 * (this.speed);
		}
	} else if (this.punching) {
		if (this.facing === "R") {
			if (this.punchRightAnimation.isDone()) {
				this.punchRightAnimation.elapsedTime = 0;
				this.punching = false;
				this.game.punch = null;
			}
			this.currentAnimation = this.punchRightAnimation;
		} else if (this.facing === "L") {
			if (this.punchLeftAnimation.isDone()) {
				this.punchLeftAnimation.elapsedTime = 0;
				this.punching = false;
				this.game.punch = null;
			}
			this.currentAnimation = this.punchLeftAnimation;
		}
	} else if (this.crouching === true) {
		if (this.facing === "R") {
			this.currentAnimation = this.crouchAnimation;
		} else {
			this.currentAnimation = this.crouchLeftAnimation;
		}
	} else {
		if (this.facing === "R") {
			this.currentAnimation = this.idleAnimation;
		} else {
			this.currentAnimation = this.idleLeftAnimation;
		}
	}
	Entity.prototype.update.call(this);
}

Scorpion.prototype.draw = function(ctx) {
	this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	Entity.prototype.draw.call(this);
}




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function Gokku(game) {
    //this.animation = new Animation(AM.getAsset("./img/RobotGokku.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 390, 96, 158, .2, 6, true, false, false, null);
   this.kickAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);
   this.jumpAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
   this.leftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
   this.rightAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
   
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    Entity.call(this, game, 0, 400);
}


Gokku.prototype = new Entity();
Gokku.prototype.constructor = Gokku;

Gokku.prototype.update = function () {
    if (this.game.space) this.jumping = true;
    if (this.game.kick) this.kicking = true;
    if(this.game.left){ this.m_left = true;} //else {this.m_left = false;}
    if(this.game.right) this.m_right = true;
    
   // this.animation.elapsedTime = 1;

    //console.log("I'm kicking " + this.kicking);
    //console.log("I'm jumping " + this.jumping);
    if(this.kicking) {
       //console.log("I got here");
        if (this.kickAnimation.isDone()) {
            this.kickAnimation.elapsedTime = 0;
            this.kicking = false;
        }
    }
    if(this.m_left) { 
        if (this.leftAnimation.isDone()) {
            this.leftAnimation.elapsedTime = 0;
            this.m_left = false;
        }
     
        var leftDistance = this.leftAnimation.elapsedTime / this.leftAnimation.totalTime;
        var totalDistance = 10;
        this.x -= leftDistance+5;
    }
    if(this.m_right) { 
        if (this.rightAnimation.isDone()) {
            this.rightAnimation.elapsedTime = 0;
            this.m_right = false;
        }
           
        var rightDistance = this.rightAnimation.elapsedTime / this.rightAnimation.totalTime;
        var totalDistance = 10;
        this.x += rightDistance+5;
    }  
    /* this.speed * this.game.clocktick
    Use this to calculate speed
    */


    //} else {
    //     console.log("I got here");
    //     this.leftAnimation.elapsedTime = 0;
    //     this.m_left = false;
    // }

    
    if (this.jumping) {
        
        console.log("I got here");
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }

        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;
        var totalHeight = 200;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
       // this.jumpAnimation.frameWidth -= 
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    }
    Entity.prototype.update.call(this);
}


Gokku.prototype.draw = function (ctx) {
    //time = this.leftAnimation.elapsedTime;
    
    if (this.jumping) {
        
        this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x + 517, this.y - 34, 1.8);
        var that = this;
        if(this.kicking) {
            this.jumping = false;
            this.kickAnimation.drawFrame(this.game.clockTick, ctx, this.x+500, this.y, 1.8);
            if(this.kickAnimation.isDone()) {
                this.kickAnimation
                this.jumping = true; 
            }
            
            //this.jumpAnimation.elapsedTime = this.ga
            
        }
    }
    else if(this.kicking) {
        this.kickAnimation.drawFrame(this.game.clockTick, ctx, this.x+500, this.y, 1.8);
    }
    else if (this.m_left) {
        this.leftAnimation.drawFrame(this.game.clockTick, ctx, this.x+500, this.y, 1.8);
    }
    
    else if (this.m_right) {
        this.rightAnimation.drawFrame(this.game.clockTick, ctx, this.x+500, this.y, 1.8);
    }
    else {
        this.animation.drawFrame(this.game.clockTick, ctx, (this.x)+500, this.y, 1.8);
    }
    
    // }else {
    //     this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    // }
    
    Entity.prototype.draw.call(this);
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






/*
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
    frames, loop, reverse, saveLast, readyFrames) 
    */
function Ryu(game) {
    this.idleRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 163, 40, 50, 100, 0.15, 4, true, false, false, null);
    this.idleLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1937, 40, 50, 100, 0.15, 4, true, true, false, null);
    this.moveRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 48, 646, 49, 86, 0.15, 4, true, true, false, null);
    this.moveLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 2056, 646, 49, 86, 0.15, 4, true, true, false, null);
    this.currentAnimation = this.idleRightAnimation;
    // this.punchAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 0, 0, 206, 110, 0.02, 30, true, true);
    // this.kickAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 0, 0, 206, 110, 0.02, 30, true, true);
    // this.jumpAnimation = new Animation(AM.getAsset("./img/RyuFlipped"), 618, 334, 174, 138, 0.02, 40, false, true);

    this.idling = true;
    this.movingRight = false;
    this.movingLeft = false;
    this.jumping = false;
    this.crouching = false;
    this.punch = false;
    this.crouchPunch = false;
    this.kick = false;
    this.crouchKick = false;
    this.facing = "R";

    this.speed = 4;
    this.radius = 100;
    this.ground = 400;
    Entity.call(this, game, 640, 420);
}

Ryu.prototype = new Entity();
Ryu.prototype.constructor = Ryu;

Ryu.prototype.update = function () {

     if (this.game.moveRight) {
        console.log(this.game.moveRight);
        this.idling = false;
        this.movingRight = true;
        this.movingLeft = false;
        this.crouching = false;
        this.punching = false;
        this.facing = "R";
    } else if (this.game.moveLeft) {
        this.idling = false;
        this.movingRight = false;
        this.movingLeft = true;
        this.crouching = false;
        this.punching = false;
        this.facing = "L";
	    }  else  if (!this.game.moveRight && !this.game.moveLeft) {
        this.idling = true;
        this.movingLeft = false;
        this.movingRight = false;
        this.crouching = false;
        this.punching = false;
    }

    if (this.movingRight) {
        this.currentAnimation = this.moveRightAnimation;
        if (this.x < 1160) {
            this.x += this.speed;
        }
    } else if (this.movingLeft) {
        this.currentAnimation = this.moveLeftAnimation;

        if (this.x >= 0) {
            this.x += -1 * (this.speed);
        }
    } else {
        if (this.facing === "R") {
            this.currentAnimation = this.idleRightAnimation;
        } else {
            this.currentAnimation = this.idleLeftAnimation;
        }
    }
    
    Entity.prototype.update.call(this);
}

Ryu.prototype.draw = function (ctx) {
    // console.log(this.movingRight);
    this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    Entity.prototype.draw.call(this);
}





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



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
	

	gameEngine.addEntity(bg);
	gameEngine.addEntity(new Scorpion(gameEngine));
	gameEngine.addEntity(gokku);
	gameEngine.addEntity(ryu);

	gameEngine.init(ctx);
	gameEngine.start();
})