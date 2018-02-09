/*
Jump is buggy right now. Fix is coming thou.
*/


/*Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
	frames, loop, reverse, saveLast, readyFrames)*/
/*
	For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
*/
function Scorpion(game) {

	/*
	This are the ready frames for some animations. Some animations have different frame width
	for each frame, so it was easier to use the array of frames for each animation.
	*/
	this.crouchFrames = [new Frame(984, 23, 57.5, 128), new Frame(1041.5, 23, 57.5, 128),
							new Frame(1127, 23, 57.5, 128)];
	this.punchFrames = [new Frame(15, 322, 57, 128), new Frame(73, 322, 62, 128),
							 new Frame(139, 322, 77, 128), new Frame(139, 322, 77, 128)];
	this.punchFrames2 = [new Frame(243, 322, 57, 128), new Frame(302, 322, 60, 128),
							new Frame(368, 322, 76, 128)];
	this.punchFrames3 = [new Frame(478, 322, 58, 128), new Frame(536, 322, 63, 128),
							new Frame(536, 322, 63, 128)];

	this.kickFrames = [new Frame(14, 603, 58, 128), new Frame(70, 603, 58, 128),
						new Frame(126, 603, 46, 128), new Frame(172, 603, 61, 128),
						  new Frame(238, 603, 82, 128), new Frame(238, 603, 82, 128),
						  new Frame(238, 603, 82, 128), new Frame(323, 603, 72, 128),
						  new Frame(172, 603, 61, 128)];

	this.kickFrames2 = [new Frame(14, 603, 58, 128), new Frame(70, 603, 58, 128),
						new Frame(126, 603, 46, 128), new Frame(172, 603, 61, 128),
						  new Frame(648, 603, 85, 128), new Frame(648, 603, 85, 128),
						  new Frame(648, 603, 85, 128), new Frame(323, 603, 72, 128),
						  new Frame(172, 603, 61, 128)];

	this.blockFrames = [new Frame(800, 23, 54, 128), new Frame(858, 23, 50, 128),
						new Frame(908, 23, 50, 128)];

	this.jumpKickFrames = [new Frame(1051, 908, 53, 128), new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128)];

	this.uppercutFrames = [new Frame(14, 907, 58, 128), new Frame(72, 907, 58, 128),
							new Frame(131, 907, 76, 128), new Frame(212, 882, 52, 153),
							new Frame(267, 892, 46, 143), new Frame(267, 892, 46, 143),
							new Frame(267, 892, 46, 143)];



	//Actual width of Scorpion?
	this.actualWidth = 58;
	
	this.idleAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		88, 23, 58, 128, 0.10, 7, true, false, false, null);
	
	this.idleLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1325, 23, 58, 128, 0.10, 7, true,  true, false, null);

	this.moveAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		18, 182, 57.5, 128, 0.10, 8, true,  false,  false, null);
	
	this.moveLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1341, 182, 57.5, 128, 0.10, 8, true,   true, false, null);

	this.crouchAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		984, 23, 57.5, 128, 0.10, 3, false,  false, true, this.crouchFrames);
	
	this.crouchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		984, 23,  57.5, 128, 0.10, 3, false,  true, true, this.crouchFrames);
	

	this.punchRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		15, 322, 57, 128, 0.1, this.punchFrames.length, false, false, false, this.punchFrames);

	this.punchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		15, 322, 57, 128, 0.1, this.punchFrames.length, false, true, false, this.punchFrames);

	this.punchRight2Animation = new Animation(AM.getAsset("./img/Scorpion.png"),
		243, 322, 57, 128, 0.1, this.punchFrames2.length, false, false, false, this.punchFrames2);

	this.punchLeft2Animation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		243, 322, 57, 128, 0.1, this.punchFrames2.length, false, true, false, this.punchFrames2);

	this.punchRight3Animation = new Animation(AM.getAsset("./img/Scorpion.png"),
		478, 322, 58, 128, 0.1, this.punchFrames3.length, false, false, false, this.punchFrames3);

	this.punchLeft3Animation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		478, 322, 58, 128, 0.1, this.punchFrames3.length, false, true, false, this.punchFrames3);

	this.kickRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		14, 603, 58, 128, 0.07, this.kickFrames.length, false, false, false, this.kickFrames);

	this.kickLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		14, 603, 58, 128, 0.07, this.kickFrames.length, false, true, false, this.kickFrames);

	this.kickRight2Animation = new Animation(AM.getAsset("./img/Scorpion.png"),
		14, 603, 58, 128, 0.07, this.kickFrames2.length, false, false, false, this.kickFrames2);

	this.kickLeft2Animation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		14, 603, 58, 128, 0.07, this.kickFrames2.length, false, true, false, this.kickFrames2);

	this.blockRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		799, 23, 57, 128, 0.1, this.blockFrames.length, false, false, true, this.blockFrames);

	this.blockLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		799, 23, 57, 128, 0.1, this.blockFrames.length, false, true, true, this.blockFrames);

	this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		1213, 23, 58, 128, 0.07, 1, false, false, true, null);

	this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		548, 23, 58, 128, 0.07, 1, false, true, true, null);

	this.jumpRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		774, 182, 49, 128, 0.1, 8, false, false, false, null);

	this.jumpLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		653, 182, 49, 128, 0.1, 8, false, true, false, null);

	this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, false, true, this.jumpKickFrames);

	this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, true, true, this.jumpKickFrames);

	this.uppercutRightAnimation = new Animation(AM.getAsset("./img/Scorpion.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

	this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/ScorpionReverse.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);


	this.currentAnimation = this.idleAnimation;
	//Scorpion's movement speed.
	this.speed = 5;
	
	//Scorpion's states.
	this.movingRight = false;
	this.movingLeft = false;
	this.idling = true;
	this.crouching = false;
	
	this.facing = "R";

	this.punching = false;
	this.punching2 = false;
	this.punching3 = false;

	this.kicking = false;
	this.kicking2 = false;

	this.blocking = false;
	this.jumping = false;

	this.jumpKicking = false;

	this.uppercutting = false;;

	Entity.call(this, game, 50, 420);
}

Scorpion.prototype = new Entity();
Scorpion.prototype.constructor = Scorpion;

//Updates scorpion's state (frame).
/*Current bugs (features) :
1) If you press crouch and punch while jumping, then
scorpion will uppercut when lands.
*/
Scorpion.prototype.update = function() {
	if (!this.game.crouch) {
		this.crouchAnimation.elapsedTime = 0;
		this.crouchLeftAnimation.elapsedTime = 0;
		//this.uppercutRightAnimation.elapsedTime = 0;
		//this.uppercutLeftAnimation.elapsedTime = 0;
		//this.uppercutting = false;
		//this.game.uppercut = null;
	}
	if (!this.game.block) {
		this.blockLeftAnimation.elapsedTime = 0;
		this.blockRightAnimation.elapsedTime = 0;
	}
	if (this.game.jump) {
		this.jumping = true;
		if (this.game.jumpKick) {
			this.jumpKicking = true;
		}
	} else if (this.game.punch) {
		console.log("you pressed punch key");
		this.punching = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.blocking = false;
	} else if (this.game.punch2) {
		this.punching2 = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.blocking = false;
	} else if (this.game.punch3) {
		this.punching3 = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.blocking = false;
	} else if (this.game.kick) {
		this.kicking = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.blocking = false;
	} else if (this.game.kick2) {
		this.kicking2 = true;
		this.movingLeft = false;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.blocking = false;
	} else if (this.game.block) {

		this.blocking = true;
		this.movingLeft = false;
		this.idling = false;
		//this.crouching = false;
		this.movingRight = false;
		if (this.game.crouch) {
			this.crouching = true;
		} else {
			this.crouching = false;
		}
	} else if (this.game.uppercut) {
		this.uppercutting = true;
	}else if (this.game.crouch) {
		this.crouching = true;
		this.idling = false;
		this.movingRight = false;
		this.movingLeft = false;
		this.punching = false;
		//this.blocking = false;
		if (this.game.block) {
			this.blocking = true;
		} else {
			this.blocking = false;
		}

	} else if (this.game.moveRight) {
		this.movingRight = true;
		this.idling = false;
		this.crouching = false;
		this.movingLeft = false;
		this.punching = false;
		this.blocking = false;
		this.facing = "R";
	} else if (this.game.moveLeft) {
		this.movingLeft = true;
		this.idling = false;
		this.crouching = false;
		this.movingRight = false;
		this.punching = false;
		this.blocking = false;
		this.facing = "L";
	//} else if (this.game.jump) {
	//	this.jumping = true;
	//	this.idling = false;
	//	this.crouching = false;
		//this.movingRight = false;
	//	this.punching = false;
	//	this.blocking = false;
	}else  if (!this.game.moveRight && !this.game.crouch && !this.game.moveLeft
				&& !this.game.punch) {
		this.idling = true;
		this.movingRight = false;
		this.crouching = false;
		this.movingLeft = false;
		this.punching = false;
		this.blocking = false;
	} 



	//FUN EASTER EGG STUFF, BETTER TO REMOVE in prototype!
	//ULTRA SPEED is activated when "U" key is pressed
	//and deactivated when "U" is pressed again
	if (this.game.ultraSpeed) {
		this.speed += 0.1;
	} else {
		this.speed = 5;
	}

	 if (this.blocking) {
		if (this.facing === "R") {
			if (this.crouching) {
				this.currentAnimation = this.blockCrouchRightAnimation;
			} else {
				this.currentAnimation = this.blockRightAnimation;
			}
		} else {
			if (this.crouching) {
				this.currentAnimation = this.blockCrouchLeftAnimation;
			} else {
				this.currentAnimation = this.blockLeftAnimation;
			}
		}
	} else if (this.punching) {
		if (this.facing === "R") {
			this.currentAnimation = this.punchRightAnimation;
			if (this.punchRightAnimation.isDone()) {
				this.punchRightAnimation.elapsedTime = 0;
				this.punching = false;
				this.game.punch = null;
			}
		} else if (this.facing === "L") {
			if (this.punchLeftAnimation.isDone()) {
				this.punchLeftAnimation.elapsedTime = 0;
				this.punching = false;
				this.game.punch = null;
			}
			this.currentAnimation = this.punchLeftAnimation;
		}
	} else if (this.punching2) {
		if (this.facing === "R") {
			this.currentAnimation = this.punchRight2Animation;
			if (this.punchRight2Animation.isDone()) {
				this.punchRight2Animation.elapsedTime = 0;
				this.punching2 = false;
				this.game.punch2 = null;
			}
		} else if (this.facing === "L") {
			this.currentAnimation = this.punchLeft2Animation;
			if (this.punchLeft2Animation.isDone()) {
				this.punchLeft2Animation.elapsedTime = 0;
				this.punching2 = false;
				this.game.punch2 = null;
			}
		}
	} else if (this.punching3) {
		if (this.facing === "R") {
			this.currentAnimation = this.punchRight3Animation;
			if (this.punchRight3Animation.isDone()) {
				this.punchRight3Animation.elapsedTime = 0;
				this.punching3 = false;
				this.game.punch3 = null;
			}
		} else if (this.facing === "L") {
			this.currentAnimation = this.punchLeft3Animation;
			if (this.punchLeft3Animation.isDone()) {
				this.punchLeft3Animation.elapsedTime = 0;
				this.punching3 = false;
				this.game.punch3 = null;
			}
		}
	} else if (this.kicking) {
		if (this.facing === "R") {
			this.currentAnimation = this.kickRightAnimation;
			if (this.kickRightAnimation.isDone()) {
				this.kickRightAnimation.elapsedTime = 0;
				this.kicking = false;
				this.game.kick = false;
			}
		} else if (this.facing === "L") {
			this.currentAnimation = this.kickLeftAnimation;
			if (this.kickLeftAnimation.isDone()) {
				this.kickLeftAnimation.elapsedTime = 0;
				this.kicking = false;
				this.game.kick = false;
			}
		}
	} else if(this.kicking2) {
		if (this.facing === "R") {
			this.currentAnimation = this.kickRight2Animation;
			if (this.kickRight2Animation.isDone()) {
				this.kickRight2Animation.elapsedTime = 0;
				this.kicking2 = false;
				this.game.kick2 = false;
			}
		} else if (this.facing === "L") {
			this.currentAnimation = this.kickLeft2Animation;
			if (this.kickLeft2Animation.isDone()) {
				this.kickLeft2Animation.elapsedTime = 0;
				this.kicking2 = false;
				this.game.kick2 = false;
			}
		}
	} else if (this.jumping) {
		if (this.facing === "R") {
			if (this.jumpKicking) {
				this.currentAnimation.readyFrames = this.jumpKickFrames;
			} else {
				this.currentAnimation = this.jumpRightAnimation;
			}
			if (this.currentAnimation.isDone()) {
				this.jumpRightAnimation.readyFrames = null;
				this.jumpKickRightAnimation.elapsedTime = 0;
				this.jumpRightAnimation.elapsedTime = 0;
				this.jumping = false;
				this.jumpKicking = false;
				this.game.jumpKick = null;
				this.game.jump = null;
			}
			if (this.movingRight && this.x < 1160) {
				this.x += this.speed;
			}
		} else if (this.facing === "L") {
			if (this.jumpKicking) {
				this.currentAnimation.readyFrames = this.jumpKickFrames;
			} else {
				this.currentAnimation = this.jumpLeftAnimation;
			}
			if (this.currentAnimation.isDone()) {
				this.jumpLeftAnimation.readyFrames = null;
				this.jumpLeftAnimation.elapsedTime = 0;
				this.jumpKickLeftAnimation.elapsedTime = 0;
				this.jumpKicking = false;
				this.jumping = false;
				this.game.jumpKick = null;
				this.game.jump = null;
			}
			if (this.movingLeft && this.x >= 0) {
				this.x -= this.speed;
			}
		}
		var jumpDistance = this.currentAnimation.elapsedTime / this.currentAnimation.totalTime;
			var totalHeight = 400;
			if (jumpDistance > 0.5) {
				jumpDistance = 1 - jumpDistance;
			}
			var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
			this.y = 420 - height;
	} else if (this.uppercutting) {
		if (this.facing === "R") {
			this.currentAnimation = this.uppercutRightAnimation;
			if (this.currentAnimation.isDone()) {
				this.uppercutRightAnimation.elapsedTime = 0;
				this.uppercutting = false;
				this.game.uppercut = null;
			}
		} else {
			this.currentAnimation = this.uppercutLeftAnimation;
			if (this.currentAnimation.isDone()) {
				this.uppercutLeftAnimation.elapsedTime = 0;
				this.uppercutting = false;
				this.game.uppercut = null;
			}
		}
	} else if (this.movingRight) {
		this.currentAnimation = this.moveAnimation;

		if (this.x < 1160) {
			this.x += this.speed;
		}
		
		
	} else if (this.movingLeft) {
		this.currentAnimation = this.moveLeftAnimation;

		if (this.x >= 0) {
			this.x += -1 * (this.speed);
		}
	} else  if (this.crouching === true) {
		if (this.facing === "R") {
			this.currentAnimation = this.crouchAnimation;
		} else {
			if (this.uppercutting) {
				
			} else {
				this.currentAnimation = this.crouchLeftAnimation;
			}
		}
	} else  {
		if (this.facing === "R") {
			this.currentAnimation = this.idleAnimation;
		} else {
			this.currentAnimation = this.idleLeftAnimation;
		}
	}
	Entity.prototype.update.call(this);
}

//Draws current frame of current animation.
Scorpion.prototype.draw = function(ctx) {
	this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
	Entity.prototype.draw.call(this);
}