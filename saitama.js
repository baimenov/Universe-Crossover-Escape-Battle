/*
Jump is buggy right now. Fix is coming thou.
*/


/*Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
	frames, loop, reverse, saveLast, readyFrames)*/
/*
	For reverse: startX = OverallSpriteWidth - regularStartX - (frameWidth * frames).
*/
function Saitama(game, x, y) {
	this.entranceFrames = [new Frame(220, 230, 43, 55), new Frame(220, 230, 43, 55),
		new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
		new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
		new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55), new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),
		new Frame(220, 230, 43, 55),new Frame(220, 230, 43, 55),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),new Frame(435, 730, 43, 90),
		new Frame(478, 730, 43, 90),new Frame(521, 730, 43, 90),new Frame(564, 730, 43, 90),new Frame(607, 730, 43, 90) ]

	this.name = "Saitama";
	this.velocity = { x: 200, y: 50 };

	/*
	This are the ready frames for some animations. Some animations have different frame width
	for each frame, so it was easier to use the array of frames for each animation.
    */
   this.jumpFrames = [new Frame(55, 242, 51, 52), new Frame(106, 242, 51, 52),
    new Frame(155, 242, 51, 52), new Frame(206, 242, 51, 52), new Frame(270, 242, 51, 52),new Frame(336, 242, 51, 52)];
    this.idleFrames = [new Frame(58, 118, 28, 48), new Frame(87, 118, 28, 48),
        new Frame(116, 118, 28, 48), new Frame(142, 118, 28, 48), new Frame(168, 118, 28, 48)];
    this.movingFrames = [new Frame(38, 180, 51, 52), new Frame(97, 180, 51, 52),
        new Frame(152, 180, 51, 52),new Frame(205, 180, 51, 52),new Frame(256, 180, 51, 52),
        new Frame(309, 180, 51, 52),new Frame(365, 180, 51, 52),new Frame(426, 180, 51, 52)];
	this.crouchFrames = [new Frame(277, 245, 41, 47), new Frame(277, 245, 41, 47),
        new Frame(277, 245, 41, 47)];
	this.punchFrames = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];
	this.punchFrames2 = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];
	this.punchFrames3 = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];

	this.kickFrames = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];

	this.kickFrames2 = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];

	this.blockFrames = [new Frame(58, 118, 28, 48), new Frame(87, 118, 28, 48),
        new Frame(116, 118, 28, 48), new Frame(142, 118, 28, 48), new Frame(168, 118, 28, 48)];

	this.jumpKickFrames = [new Frame(1051, 908, 53, 128), new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
							new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128)];

	this.uppercutFrames = [new Frame(66, 304, 34, 47), new Frame(104, 304, 34, 47),
        new Frame(146, 304, 34, 47), new Frame(189, 304, 52, 47),
        new Frame(241, 304, 52, 47),new Frame(292, 303, 52, 47)];

	this.knockBackFrames = [new Frame(58, 118, 28, 48), new Frame(87, 118, 28, 48),
        new Frame(116, 118, 28, 48), new Frame(142, 118, 28, 48), new Frame(168, 118, 28, 48)];

	this.dyingFrames = [new Frame(74, 1309, 49, 55), new Frame(121, 1309, 49, 55),
        new Frame(168, 1309, 49, 55)];

	this.knockBackRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		15, 1192, 77, 123, 0.10, this.knockBackFrames.length, false, false, false, this.knockBackFrames);

	this.knockBackLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		15, 1192, 77, 123, 0.10, this.knockBackFrames.length, false, true, false, this.knockBackFrames);




	//Actual width of Saitama?
	this.actualWidth = 58;

	this.actualHeight = 118;

	this.range = this.actualWidth * this.scaleBy;
	
	this.idleAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		88, 23, 58, 128, 0.10, this.idleFrames.length, true, false, false, this.idleFrames);
	
	this.idleLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		1325, 23, 58, 128, 0.10, this.idleFrames.length, true,  true, false, this.idleFrames);

	this.moveAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		18, 182, 57.5, 128, 0.10, this.movingFrames.length, true,  false,  false, this.movingFrames);
	
	this.moveLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		1341, 182, 57.5, 128, 0.10, this.movingFrames.length, true,   true, false, this.movingFrames);

	this.crouchAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		984, 23, 57.5, 128, 0.10, 3, false,  false, true, this.crouchFrames);
	
	this.crouchLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		984, 23,  57.5, 128, 0.10, 3, false,  true, true, this.crouchFrames);
	

	this.punchRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		15, 322, 57, 128, 0.1, this.punchFrames.length, false, false, false, this.punchFrames);

	this.punchLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		15, 322, 57, 128, 0.1, this.punchFrames.length, false, true, false, this.punchFrames);

	this.punchRight2Animation = new Animation(AM.getAsset("./img/Saitama.png"),
		243, 322, 57, 128, 0.1, this.punchFrames2.length, false, false, false, this.punchFrames2);

	this.punchLeft2Animation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		243, 322, 57, 128, 0.1, this.punchFrames2.length, false, true, false, this.punchFrames2);

	this.punchRight3Animation = new Animation(AM.getAsset("./img/Saitama.png"),
		478, 322, 58, 128, 0.1, this.punchFrames3.length, false, false, false, this.punchFrames3);

	this.punchLeft3Animation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		478, 322, 58, 128, 0.1, this.punchFrames3.length, false, true, false, this.punchFrames3);

	this.kickRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		14, 603, 58, 128, 0.07, this.kickFrames.length, false, false, false, this.kickFrames);

	this.kickLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		14, 603, 58, 128, 0.07, this.kickFrames.length, false, true, false, this.kickFrames);

	this.kickRight2Animation = new Animation(AM.getAsset("./img/Saitama.png"),
		14, 603, 58, 128, 0.07, this.kickFrames2.length, false, false, false, this.kickFrames2);

	this.kickLeft2Animation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		14, 603, 58, 128, 0.07, this.kickFrames2.length, false, true, false, this.kickFrames2);

	this.blockRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		799, 23, 57, 128, 0.1, this.blockFrames.length, false, false, true, this.blockFrames);

	this.blockLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		799, 23, 57, 128, 0.1, this.blockFrames.length, false, true, true, this.blockFrames);

	this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		1213, 23, 58, 128, 0.07, 1, false, false, true, null);

	this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		548, 23, 58, 128, 0.07, 1, false, true, true, null);

	this.jumpRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		823, 244, 49, 64, 0.1, this.jumpFrames.length, false, false, false, this.jumpFrames);

	this.jumpLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		653, 244, 49, 64, 0.1, this.jumpFrames.length, false, true, false, this.jumpFrames);

	this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, false, true, this.jumpKickFrames);

	this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, true, true, this.jumpKickFrames);

	this.uppercutRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

	this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

	this.attackedRightAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		12, 1053, 58, 128, 0.16, this.idleFrames.length, false, false, false, this.idleFrames);

	this.attackedLeftAnimation = new Animation(AM.getAsset("./img/SaitamaReverse.png"),
		1691, 1053, 58, 128, 0.16, this.idleFrames.length, false, true, false, this.idleFrames);

	this.dyingAnimation = new Animation(AM.getAsset("./img/Saitama.png"),
		505, 1202, 64, 111, 0.10, this.dyingFrames.length, false, false, false, this.dyingFrames);


	this.currentAnimation = this.idleAnimation;
	//Saitama's movement speed.
	this.speed = 5;
	
	//Saitama's states.
	this.movingRight = false;
	this.movingLeft = false;
	this.idling = true;
	this.crouching = false;
	
	this.facing = "R";
    this.scaleBy = 50;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
	this.punching = false;
	this.punching2 = false;
	this.punching3 = false;

	this.kicking = false;
	this.kicking2 = false;

	this.blocking = false;
	this.jumping = false;

	this.jumpKicking = false;

	this.uppercutting = false;

	this.isBot = false;

	this.boxWidth = 58;
	this.boxHeight = 128;

	this.gettingAttacked = false;

	this.knockingBack = false;

	this.scaleBy = 2;

	this.currentBox = (50, 420, 58 * this.scaleBy, 128 * this.scaleBy);

	this.healthBar = new HealthBar(100, this.game, 20, 20);

	this.attackDamageMap = new Map();

	this.gettingAttackedCounter = 0;

	this.attackDamageMap.set(this.punching, 100);
	this.attackDamageMap.set(this.punching2, 100);
	this.attackDamageMap.set(this.punching3, 100);
	this.attackDamageMap.set(this.kicking, 100);
	this.attackDamageMap.set(this.kicking2, 100);

	this.isDead = false;

	this.botCounter = 0;

	this.xView = x;
	this.yView = y;

	this.gameover = false;

	this.botBlockingCounter = 0;

	Entity.call(this, game, x, y);
}
var kicksnd = new Audio("./sounds/kick.mp3");
var ducksnd = new Audio("./sounds/duck.mp3");
var punchsnd = new Audio("./sounds/punch.mp3");
var hitsnd = new Audio("./sounds/hit.mp3");
var jumpsnd = new Audio("./sounds/jumping.mp3");

var attack = false;

Saitama.prototype = new Entity();
Saitama.prototype.constructor = Saitama;

//Updates scorpion's state (frame).
/*Current bugs (features) :
1) If you press crouch and punch while jumping, then
scorpion will uppercut when lands.
*/
var count = 0;
var count2 = 0

/*
Checks gameEngine states and changes Character's states
depending on them.
*/
Saitama.prototype.checkGameStates = function() {
	if (!this.game.crouch) {
			this.crouchAnimation.elapsedTime = 0;
			this.crouchLeftAnimation.elapsedTime = 0;
		}
		if (!this.game.block) {
			this.blockLeftAnimation.elapsedTime = 0;
			this.blockRightAnimation.elapsedTime = 0;
		}
		if (this.game.jump) {
			if (!this.gettingAttacked && !this.knockingBack) {
				this.jumping = true;
			} else {
				this.game.jump = null;
			}
			this.game.block = null;
			this.blocking = false;
			if (this.game.jumpKick) {
			//	this.jumpKicking = true;
			}
		} else if (this.game.punch ) {
			//console.log("you pressed punch key");
			if (!this.gettingAttacked && !this.knockingBack) {
				this.punching = true;
			} else {
				this.game.punch = null;
			}
			this.movingLeft = false;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.blocking = false;
		} else if (this.game.punch2) {

			if (!this.gettingAttacked) {
				this.punching2 = true;
			} 
			this.movingLeft = false;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.blocking = false;
		} else if (this.game.punch3) {
			if (!this.gettingAttacked) {
				this.punching3 = true;
			}
			this.movingLeft = false;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.blocking = false;
		} else if (this.game.kick ) {
			if (!this.gettingAttacked && !this.knockingBack) {
				this.kicking = true;
			} else {
				this.game.kick = null;
			}
			this.movingLeft = false;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.blocking = false;
		} 
		else if (this.game.kick2) {
			if (!this.gettingAttacked) {
				this.kicking2 = true;
			}
			this.movingLeft = false;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.blocking = false;
		} else if (this.game.block) {

			if (!this.gettingAttacked && !this.knockingBack) {
				this.blocking = true;
			}
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
			if (!this.gettingAttacked) {
				this.facing = "R";
			}
		} else if (this.game.moveLeft) {
			this.movingLeft = true;
			this.idling = false;
			this.crouching = false;
			this.movingRight = false;
			this.punching = false;
			this.blocking = false;
			if (!this.gettingAttacked) {
				this.facing = "L";
			}
		}
		// else if (this.game.jump) {
		//	this.jumping = true;
		//	this.idling = false;
		//	this.crouching = false;
			//this.movingRight = false;
		//	this.punching = false;
		//	this.blocking = false; }
		else  if (!this.game.moveRight && !this.game.crouch && !this.game.moveLeft
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
		/*if (this.game.ultraSpeed) {
			this.speed += 0.1;
		} else {
			this.speed = 5;
		}*/
}

/*Check my states and update animations.*/
Saitama.prototype.checkMyStates = function() {
	if (this.gettingAttacked) {
		if (!this.blocking) {
			this.gettingAttackedCounter++;
		}
		this.punching = false;
		this.punching2 = false;
		this.punching3 = false;
		this.kicking = false;
		this.kicking2 = false;
		if (this.jumping) {
			this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
			this.jumping = false;
			this.y = 420;
			if (this.currentAnimation.isDone()) {
	 			this.currentAnimation.elapsedTime = 0;
	 			this.gettingAttacked = false;
	 		}
		} else if (this.blocking && !this.knockingBack) {
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
		} else {
			if (this.gettingAttackedCounter >= 100) {	
				this.currentAnimation = this.facing === "L" ? this.knockBackLeftAnimation : this.knockBackRightAnimation;
				this.knockingBack = true;
				if (this.x > 10 && this.x < 3700) {
					this.x += this.facing === 'L' ? 5 : -5;
				}
				if (this.currentAnimation.isDone()) {
					this.gettingAttacked = false;
					this.knockingBack = false;
					this.gettingAttackedCounter = 0;
					this.knockBackLeftAnimation.elapsedTime = 0;
					this.knockBackRightAnimation.elapsedTime = 0;
				}
			} else {
	 			this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
	 				if (this.currentAnimation.isDone()) {
	 					this.currentAnimation.elapsedTime = 0;
	 					this.gettingAttacked = false;
	 				}
	 			}
	 		}	
		} else  if (this.blocking) {
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
		}  else if (this.uppercutting) {
			if (this.facing === "R") {
				this.currentAnimation = this.uppercutRightAnimation;
				if(this.uppercutRightAnimation > .2) {
					hitsnd.play();
				}
				if (this.currentAnimation.isDone()) {
					this.uppercutRightAnimation.elapsedTime = 0;
					this.uppercutting = false;
					this.game.uppercut = null;
				}
			} else {
				this.currentAnimation = this.uppercutLeftAnimation;
				if(this.uppercutLeftAnimation > .2) {
					hitsnd.play();
				}
				if (this.currentAnimation.isDone()) {
					this.uppercutLeftAnimation.elapsedTime = 0;
					this.uppercutting = false;
					this.game.uppercut = null;
				}
			}
		} else if (this.punching) {
			if (this.facing === "R") {
				this.currentAnimation = this.punchRightAnimation;
				if(this.punchRightAnimation.elapsedTime > .2){
					punchsnd.play();
				}
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
				if(this.punchLeftAnimation.elapsedTime > .2){
					punchsnd.play();
				}
			}
		} else if (this.punching2) {
			if (this.facing === "R") {
				this.currentAnimation = this.punchRight2Animation;
				if(this.punchRight2Animation.elapsedTime > .2){
					punchsnd.play();
				}
				if (this.punchRight2Animation.isDone()) {
					this.punchRight2Animation.elapsedTime = 0;
					this.punching2 = false;
					this.game.punch2 = null;
				}
			} else if (this.facing === "L") {
				this.currentAnimation = this.punchLeft2Animation;
				if(this.punchLeft2Animation.elapsedTime > .2){
					punchsnd.play();
				}
				if (this.punchLeft2Animation.isDone()) {
					this.punchLeft2Animation.elapsedTime = 0;
					this.punching2 = false;
					this.game.punch2 = null;
				}
			}
		} else if (this.punching3) {
			if (this.facing === "R") {
				this.currentAnimation = this.punchRight3Animation;
				if(this.punchRight3Animation.elapsedTime > .2){
					kicksnd.play();
				}
				if (this.punchRight3Animation.isDone()) {
					this.punchRight3Animation.elapsedTime = 0;
					this.punching3 = false;
					this.game.punch3 = null;
				}
			} else if (this.facing === "L") {
				this.currentAnimation = this.punchLeft3Animation;
				if(this.punchLeft3Animation.elapsedTime > .2){
					kicksnd.play();
				}
				if (this.punchLeft3Animation.isDone()) {
					this.punchLeft3Animation.elapsedTime = 0;
					this.punching3 = false;
					this.game.punch3 = null;
				}
			}
		} else if (this.kicking) {
			if (this.facing === "R") {
				this.currentAnimation = this.kickRightAnimation;
				if(this.kickRightAnimation.elapsedTime > .4){
					kicksnd.play();
				}
				if (this.kickRightAnimation.isDone()) {
					
					this.kickRightAnimation.elapsedTime = 0;
					this.kicking = false;
					this.game.kick = false;
				}
			} else if (this.facing === "L") {
				this.currentAnimation = this.kickLeftAnimation;
				if(this.kickLeftAnimation.elapsedTime > .4){
					kicksnd.play();
				}
				if (this.kickLeftAnimation.isDone()) {
					kicksnd.play()
					this.kickLeftAnimation.elapsedTime = 0;
					this.kicking = false;
					this.game.kick = false;
				}
			}
		} else if(this.kicking2) {
			if (this.facing === "R") {
				this.currentAnimation = this.kickRight2Animation;
				if(this.kickRight2Animation.elapsedTime > .2){
					hitsnd.play();
				}
				if (this.kickRight2Animation.isDone()) {
					this.kickRight2Animation.elapsedTime = 0;
					this.kicking2 = false;
					this.game.kick2 = false;
				}
			} else if (this.facing === "L") {
				this.currentAnimation = this.kickLeft2Animation;
				if(this.kickLeft2Animation.elapsedTime > .2){
					hitsnd.play();
				}
				if (this.kickLeft2Animation.isDone()) {
					this.kickLeft2Animation.elapsedTime = 0;
					this.kicking2 = false;
					this.game.kick2 = false;
				}
			}
		} else if (this.jumping) {
			if (this.facing === "R") {
					this.currentAnimation = this.jumpRightAnimation;
					jumpsnd.play();
				if (this.currentAnimation.isDone()) {
					console.log("done jumping");
					//this.jumpRightAnimation.readyFrames = null;
					this.jumpKickRightAnimation.elapsedTime = 0;
					this.jumpRightAnimation.elapsedTime = 0;
					this.jumping = false;
					this.game.jumpKick = null;
					this.game.jump = null;
				}
				if (this.movingRight && this.x < 3720) {
					this.x += this.speed;
				}

				if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
					this.xView += this.speed;
				}
			} else if (this.facing === "L") {
				this.currentAnimation = this.jumpLeftAnimation;
				jumpsnd.play();
				if (this.currentAnimation.isDone()) {
					//this.jumpLeftAnimation.readyFrames = null;
					this.jumpLeftAnimation.elapsedTime = 0;
					this.jumpKickLeftAnimation.elapsedTime = 0;
					this.jumping = false;
					this.game.jumpKick = null;
					this.game.jump = null;
				}
				if (this.movingLeft && this.x >= 0) {
					this.x -= this.speed;
				}

				if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
					this.xView += -1 * (this.speed);
				}
			}
			var jumpDistance = this.currentAnimation.elapsedTime / this.currentAnimation.totalTime;
			var totalHeight = 360;
			if (jumpDistance > 0.5) {
				jumpDistance = 1 - jumpDistance;
			}
			var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
			this.y = 420 - height;
		} else  if (this.movingRight) {
			if (!this.gettingAttacked) {
				this.currentAnimation = this.moveAnimation;
				if ((this.x < 3720)) {
					this.x += this.speed;
				}	
				if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
					this.xView += this.speed;
				}
			}
		} else if (this.movingLeft) {
			if (!this.gettingAttacked) {
				this.currentAnimation = this.moveLeftAnimation;
				if (this.x >= 0) {
					this.x += -1 * (this.speed);
				}
				if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
					this.xView += -1 * (this.speed);
				}
			}
		} else  if (this.crouching === true) {
			if (this.facing === "R") {
				this.currentAnimation = this.crouchAnimation;
				
					ducksnd.play();
				
			} else {
				if (this.uppercutting) {
					
				} else {
					this.currentAnimation = this.crouchLeftAnimation;
					
						ducksnd.play();
					
				}
			}
		} else  {
			if (this.facing === "R") {
				this.currentAnimation = this.idleAnimation;
			} else {
				this.currentAnimation = this.idleLeftAnimation;
			}
		}
}


Saitama.prototype.update = function() {

	if (this.healthBar.hp <= 0) {
		this.currentAnimation = this.dyingAnimation;
		this.healthBar.hp = 0;
		if (this.dyingAnimation.isDone()) {
			if (!this.gameover) {
				this.game.addEntity(new GameOver(this.game, this.game.xView + 340, this.game.yView + 200));
				this.gameover = true;
			}
			this.removeFromWorld = true;
		}
	} else {
		if (!this.isBot) {
			this.checkGameStates();
			this.checkMyStates();
		} else {

		}

		var currentBox = new Box(this.currentAnimation.getX(this.x, this.scaleBy),
		this.currentAnimation.getY(this.y, this.scaleBy),
		this.currentAnimation.getFrameWidth() * this.scaleBy,
		this.currentAnimation.getFrameHeight() * this.scaleBy);
		this.currentBox = currentBox;

	//Detect collision with other entities
	var range = 50;
	if(count > 2000){
		count = 0;
	}
	for (var i = 0; i < this.game.entities.length; i++) {
		var ent = this.game.entities[i];
		if(!this.isBot){
				if (ent.gettingAttacked) {
					if (!ent.blocking) {
						ent.gettingAttackedCounter++;
					}
					ent.punching = false;
					ent.punching2 = false;
					ent.punching3 = false;
					ent.kicking = false;
					ent.kicking2 = false;
					if (ent.jumping) {
						ent.currentAnimation = ent.facing === "L" ? ent.attackedLeftAnimation : ent.attackedRightAnimation;
						ent.jumping = false;
						ent.y = 420;
						if (ent.currentAnimation.isDone()) {
				 			ent.currentAnimation.elapsedTime = 0;
				 			ent.gettingAttacked = false;
				 			//ent.currentAnimation = ent.facing === "L" ? ent.idleLeftAnimation : ent.idleAnimation;
				 		}
					} else if (ent.blocking) {
						if (ent.facing === "R") {
							if (ent.crouching) {
								ent.currentAnimation = ent.blockCrouchRightAnimation;
							} else {
								ent.currentAnimation = ent.blockRightAnimation;
							}
						} else {
							if (ent.crouching) {
								ent.currentAnimation = ent.blockCrouchLeftAnimation;
							} else {
								ent.currentAnimation = ent.blockLeftAnimation;
							}
						}
					} else {
						if (ent.gettingAttackedCounter >= 100) {
							ent.currentAnimation = ent.facing === "L" ? ent.knockBackLeftAnimation : ent.knockBackRightAnimation;
							if (ent.x > 10 && ent.x < 3700) {
								ent.x += ent.facing === 'L' ? 5 : -5;
							}
							if (ent.currentAnimation.isDone()) {
								console.log("should be done falling");
								ent.gettingAttacked = false;
								ent.gettingAttackedCounter = 0;
								ent.knockBackLeftAnimation.elapsedTime = 0;
								ent.knockBackRightAnimation.elapsedTime = 0;
							}
						} else {
				 			ent.currentAnimation = ent.facing === "L" ? ent.attackedLeftAnimation : ent.attackedRightAnimation;
				 			if (ent.currentAnimation.isDone()) {
				 				ent.currentAnimation.elapsedTime = 0;
				 				ent.gettingAttacked = false;
				 				//ent.currentAnimation = ent.facing === "L" ? ent.idleLeftAnimation : ent.idleAnimation;
				 			}
				 		}
				 	}	
				} else {
				//BOTS ATTACK LOGIC
				//Player on the right
				if (ent !== this && ent.currentBox && this.collide(ent)) {
					if(this.game.kick && this.currentAnimation.isDone()) {
						attack = true;
					} else {
						attack = false;
					}
					range = ent.actualWidth * ent.scaleBy;
					//console.log(Math.abs(this.x - ent.x));
					//console.log("Saitama's x:" + this.x + ", y:" + this.y + ", Subzero's x:" + ent.x + ", y:" + ent.y);
					if (this.x > ent.x && Math.abs(this.x - ent.x) < range) {
						
						count++;
		
						if(count % 30 == 0) {
							rand = Math.floor(Math.random() * 3);
						}
						//console.log("Right");
						if(this.kicking){
							attack = true;
							//console.log("kicking");
							//ent.gettingAttacked == true;
						}
						if(!this.isAttacking()){
							
							//console.log("Here's the random number "+ rand);
							//var rand = Math.floor(Math.random() * 3);
							if(rand === 0){
								ent.currentAnimation = ent.kickRightAnimation;
								this.facing = "L";
								console.log("bot is kicking");
								if (this.blocking) {
									ent.attackHandler(this, 0.3);		
								} else {
									ent.attackHandler(this, 1);
									this.gettingAttacked = true;
								}
								//console.log("Elapsed " + ent.game.clockTick);
								if(ent.currentAnimation.isDone()) {
									//console.log("I'm done kicking right");
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
							if(rand === 1){
								ent.currentAnimation = ent.punchRightAnimation;
								this.facing = "L";
								console.log("bot is punching");
								if (this.blocking) {
									ent.attackHandler(this, 0.3);
								} else {
									ent.attackHandler(this, 1);
								}
								if(ent.currentAnimation.isDone()) {
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
							if(rand === 2) {
								ent.currentAnimation = ent.blockRightAnimation;
								if(ent.currentAnimation.isDone()) {
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
		
							
						} else {
							
							
							if (ent.isBlocking) {
								this.attackHandler(ent, 10);

							} else {
								this.attackHandler(ent, 30);
								//ent.currentAnimation =  ent.attackedRightAnimation;
								ent.gettingAttacked = true;
							}
							if (ent.currentAnimation.isDone()) {
			
	 							ent.currentAnimation.elapsedTime = 0;
	 							ent.gettingAttacked = false;
	 							//this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
	 						}	
						}
						
						//ent.velocity = 0;

						//Player on the left
					} if (this.x < ent.x && (Math.abs(this.x - ent.x) < range)) {
						
						if(count2 % 50 == 0) {
							rand2 = Math.floor(Math.random() * 3);
						}
						count2++;
						if(!this.isAttacking()){
							
							if(rand2 == 0){
								//console.log("Left");
								ent.currentAnimation = ent.kickLeftAnimation;
								if (this.blocking) {
									ent.attackHandler(this, 0.3);
								} else {
									ent.attackHandler(this, 1);
									this.facing = "R";
								}
								//console.log("Elapsed " + ent.game.clockTick)
								if(ent.currentAnimation.isDone()) {
								//	console.log("I'm done kicking right")
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
							if(rand2 == 1){
								
								ent.currentAnimation = ent.punchLeftAnimation;
								if (this.blocking) {
									ent.attackHandler(this, 0.3);
								} else {
									ent.attackHandler(this, 1);
									this.facing = "R";
								}
								if(ent.currentAnimation.isDone()) {
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
							if(rand2 == 2) {
								ent.currentAnimation = ent.blockLeftAnimation;

								if(ent.currentAnimation.isDone()) {
									
									//rand = Math.floor(Math.random() * Math.floor(2))
								}
							}
							if(ent.healthBar.hp <=0) {
								ent.isDead = true;
								ent.removeFromWorld = true;
							}
							if(this.healthBar.hp <= 0) {
								ent.currentAnimation = ent.idleAnimation;
							}
						} else {
							
							if (ent.isBlocking) {
								this.attackHandler(ent, 10)
							} else {
								this.attackHandler(ent, 30);
								ent.currentAnimation =  ent.attackedLeftAnimation;
							}
							if (ent.currentAnimation.isDone()) {
			
	 							ent.currentAnimation.elapsedTime = 0;
	 							ent.gettingAttacked = false;
	 							//this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
	 						}	
						}
					}
					// Saitama.prototype.isAttacking = function() {
					//     return (this.punching || this.punching2 || this.punching3
					//         || this.kicking || this.kicking2 || this.uppercutting
					//         || this.jumpKicking);
					//}
					//this.attackHandler(ent, 0.3);
					//this.x += this.velocity.x * this.game.clockTick;
					//this.y += this.velocity.y * this.game.clockTick;
					//ent.x += ent.velocity.x * this.game.clockTick;
					//ent.y += ent.velocity.y * this.game.clockTick;
		
					//console.log("They collide!");
				}
			   
			   //BOTS FOLLOW LOGIC
				if(ent !== this && ent.currentBox && !(this.collide(ent))){
					//attack == false;
					//console.log("THE NUMBER " + Math.abs(this.x - ent.x))
					//console.log(this.x < ent.x);
					//console.log("IF " + (Math.abs(this.x - ent.x) < range));
					//this.x += this.velocity.x * this.game.clockTick;
					// console.log("Box " +ent.currentBox);
					// console.log("Goku " +this.x);
					// console.log("Saitama "+ ent.x);
					if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
						ent.facing = "L";
						ent.currentAnimation = ent.moveLeftAnimation;
						ent.x -= ent.speed;
					}
					else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range)) {
						ent.facing = "R";
						ent.currentAnimation = ent.moveAnimation
						ent.x += ent.speed;
					}
					if(this.game.kick && this.currentAnimation.isDone()) {
						attack = true;
					} else {
						attack = false;
					}
					
					
					
		
				}
			
			}
		}
		// if (ent !== this && ent.currentBox && this.collide(ent)) {
		// 	console.log("They collide!");

		// 	if (this.isAttacking()) {
		// 		if (this.facing === "R" && this.isToTheLeftOf(ent)) {
		// 			if (!ent.blocking) {
		// 				this.attackHandler(ent, 1);
		// 			} else {
		// 				this.attackHandler(ent, 0.3);
		// 			}
		// 			ent.facing = "L";
		// 		} else if (this.facing === "L" && !this.isToTheLeftOf(ent)) {
		// 			if (!ent.blocking) {
		// 				this.attackHandler(ent, 1);
		// 			} else {
		// 				this.attackHandler(ent, 0.3);
		// 			}
		// 			ent.facing = "R";
		// 		}
		// 	}
		// }
	}

	if (!this.isBot) {
		//console.log("blocking is: " + this.blocking);
	}
	}
	Entity.prototype.update.call(this);
}

Saitama.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}

Saitama.prototype.isAttacking = function() {
	return (this.punching || this.punching2 || this.punching3
		|| this.kicking || this.kicking2 || this.uppercutting
		|| this.jumpKicking);
}

Saitama.prototype.isToTheLeftOf = function(other) {
	return (this.x < other.x);
}

Saitama.prototype.getAttackType = function() {
	if (this.punching) {
		return this.punching;
	} else if (this.punching2) {
		return this.punching2;
	} else if (this.punching3) {
		return this.punching3;
	} else if (this.kicking) {
		return this.kicking;
	} else if (this.kicking2) {
		return this.kicking2;
	} else {
		return false;
	}
}

Saitama.prototype.attackHandler = function(other, mult) {
	if (!this.isBot) {
		mult *= 4;
	} else {
		mult *= 2;
	}
	if (this.currentAnimation === this.punchRightAnimation
		|| this.currentAnimation === this.punchLeftAnimation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.punchRight2Animation
		|| this.currentAnimation === this.punchLeft2Animation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.punchRight3Animation
		|| this.currentAnimation === this.punchLeft3Animation) {
		other.healthBar.hp -= 0.0625 * mult;		
	} else if (this.currentAnimation === this.kickRightAnimation
		|| this.currentAnimation === this.kickLeftAnimation) {
		other.healthBar.hp -= 0.05 * mult;	
	} else if (this.currentAnimation === this.kickRight2Animation
		|| this.currentAnimation === this.kickLeft2Animation) {
		other.healthBar.hp -= 0.05 * mult;
	} else if (this.currentAnimation === this.uppercutRightAnimation
		|| this.currentAnimation === this.uppercutLeftAnimation) {
		other.healthBar.hp -= 0.09 * mult;
	}
	
		other.gettingAttacked = true;
	
}

//Draws current frame of current animation.
Saitama.prototype.draw = function(ctx, xView, yView) {
	if (!this.isBot) {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	} else {
		this.healthBar.draw(ctx);
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	}
	Entity.prototype.draw.call(this);
}