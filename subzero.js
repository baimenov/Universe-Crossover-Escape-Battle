/*
	Subzero class.
	Pretty much the same as Scorpion.
*/
//Reverse 1803 - startsX - frames*frameWidth
function Subzero(game, x, y) {
	this.name = "Subzero";
	this.scaleBy = 2.41;

	this.img = AM.getAsset("./img/Subzero.png");
	this.imgr = AM.getAsset("./img/SubzeroReverse.png");


	this.speed = 5;
	
	//Subzero's states.
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

	this.uppercutting = false;

	this.isBot = false;

	this.boxWidth = 51;
	this.boxHeight = 105;

	this.gettingAttacked = false;

	this.crouchFrames = [new Frame(1156, 30, 51, 93), new Frame(1212, 54, 51, 69),
							new Frame(1269, 69, 50, 54)];
	this.blockFrames = [new Frame(974, 18, 51, 105), new Frame(1031, 18, 45, 105),
						new Frame(1083, 18, 44, 105)];

	this.punchFrames = [new Frame(17, 262, 52, 103), new Frame(75, 262, 57, 103),
						new Frame(142, 262, 73, 103), new Frame(142, 262, 73, 103)];

	this.punchFrames2 = [new Frame(248, 261, 46, 104), new Frame(304, 261, 56, 104),
						new Frame(369, 261, 73, 104)];

	this.punchFrames3 = [new Frame(481, 261, 52, 104), new Frame(540, 261, 58, 104),
						new Frame(540, 261, 58, 104)];

	this.kickFrames = [new Frame(18, 492, 49, 101), new Frame(74, 490, 49, 104),
						new Frame(129, 491, 39, 103), new Frame(175, 506, 55, 89),
						new Frame(241, 501, 77, 92), new Frame(241, 501, 77, 92),
						new Frame(241, 501, 77, 92), new Frame(327, 510, 65, 84),
						new Frame(175, 506, 55, 89)];

	this.kickFrames2 = [new Frame(18, 492, 49, 101), new Frame(74, 490, 49, 104),
						new Frame(129, 491, 39, 103), new Frame(175, 506, 55, 89),
						new Frame(650, 514, 80, 80), new Frame(650, 514, 80, 80),
						new Frame(650, 514, 80, 80), new Frame(327, 510, 65, 84),
						new Frame(175, 506, 55, 89)];

	this.jumpFrames = [new Frame(727, 148, 44, 105), new Frame(778, 200, 36, 53),
						new Frame(823, 200, 41, 53), new Frame(873, 209, 43, 45),
						new Frame(926, 205, 44, 47), new Frame(977, 202, 38, 51),
						new Frame(1022, 202, 42, 52), new Frame(1071, 209, 44, 43)];



	this.idleAnimation = new Animation(this.img,
		91, 18, 51, 105, 0.10, 12, true, false, false, null);
	this.idleLeftAnimation = new Animation(this.imgr,
		1100, 18, 51, 105, 0.10, 12, true, true, false, null);

	this.moveAnimation = new Animation(this.img,
		20, 150, 51, 102, 0.10, 8, true, false, false, null);
	this.moveLeftAnimation = new Animation(this.imgr,
		1375, 150, 51, 102, 0.10, 8, true, true, false, null);

	this.crouchAnimation = new Animation(this.img,
		1156, 30, 51, 93, 0.10, this.crouchFrames.length, false, false, true, this.crouchFrames);
	this.crouchLeftAnimation = new Animation(this.imgr,
		1156, 30, 51, 93, 0.10, this.crouchFrames.length, false, true, true, this.crouchFrames);

	this.blockRightAnimation = new Animation(this.img,
		974, 18, 51, 105, 0.10, this.blockFrames.length, false, false, true, this.blockFrames);
	this.blockLeftAnimation = new Animation(this.imgr,
		974, 18, 51, 105, 0.10, this.blockFrames.length, false, true, true, this.blockFrames);

	this.blockCrouchRightAnimation = new Animation(this.img,
		1350, 50, 45, 73, 0.10, 1, false, false, true, null);
	this.blockCrouchLeftAnimation = new Animation(this.imgr,
		408, 50, 45, 73, 0.10, 1, false, false, true, null);

	this.punchRightAnimation = new Animation(this.img,
		17, 262, 52, 103, 0.10, this.punchFrames.length, false, false, false, this.punchFrames);
	this.punchLeftAnimiation = new Animation(this.imgr,
		17, 262, 52, 103, 0.10, this.punchFrames.length, false, true, false, this.punchFrames);

	this.punchRight2Animation = new Animation(this.img,
		248, 261, 46, 104, 0.10, this.punchFrames2.length, false, false, false, this.punchFrames2);
	this.punchLeft2Animation = new Animation(this.imgr,
		248, 261, 46, 104, 0.10, this.punchFrames2.length, false, true, false, this.punchFrames2);

	this.punchRight3Animation = new Animation(this.img,
		481, 261, 52, 104, 0.10, this.punchFrames3.length, false, false, false, this.punchFrames3);
	this.punchLeft3Animation = new Animation(this.imgr,
		481, 261, 52, 104, 0.10, this.punchFrames3.length, false, true, false, this.punchFrames3);

	this.kickRightAnimation = new Animation(this.img,
		18, 492, 49, 101, 0.10, this.kickFrames.length, false, false, false, this.kickFrames);
	this.kickLeftAnimation = new Animation(this.imgr,
		18, 492, 49, 101, 0.10, this.kickFrames.length, false, true, false, this.kickFrames);

	this.kickRight2Animation = new Animation(this.img,
		18, 492, 49, 101, 0.10, this.kickFrames2.length, false, false, false, this.kickFrames2);
	this.kickLeft2Animation = new Animation(this.imgr,
		18, 492, 49, 101, 0.10, this.kickFrames2.length, false, true, false, this.kickFrames2);

	this.jumpRightAnimation = new Animation(this.img,
		727, 148, 44, 105, 0.10, this.jumpFrames.length, false, false, false, this.jumpFrames);
	this.jumpLeftAnimation = new Animation(this.imgr,
		727, 148, 44, 105, 0.10, this.jumpFrames.length, false, true, false, this.jumpFrames);

	//TODO: jumpkicks, uppercuts, attackeds.

	this.animationCollection = [this.idleAnimation, this.idleLeftAnimation,
			this.moveAnimation, this.moveLeftAnimation, this.crouchAnimation,
			this.crouchLeftAnimation, this.blockRightAnimation,
			this.blockLeftAnimation, this.blockCrouchRightAnimation,
			this.blockCrouchLeftAnimation, this.punchRightAnimation,
			this.punchLeftAnimiation, this.punchRight2Animation, this.punchLeft2Animation,
			this.punchRight3Animation, this.punchLeft3Animation, this.kickRightAnimation,
			this.kickLeftAnimation, this.kickRight2Animation, this.kickLeft2Animation,
			this.jumpRightAnimation, this.jumpLeftAnimation];

	for (var i = 0; i < this.animationCollection.length; i++) {
		//console.log(i);
		this.animationCollection[i].actualWidth = 51;
		this.animationCollection[i].actualHeight = 105;
	}


	this.currentAnimation = this.idleAnimation;





	this.counter = 0;
	this.setA = 0;
	Entity.call(this, game, x, y);
}

Subzero.prototype = new Entity();
Subzero.prototype.constructor = Subzero;

Subzero.prototype.update = function() {
	this.counter = (this.counter + 1) % 100;
	if (this.counter === 0) {
		this.setA = (this.setA + 1) % this.animationCollection.length;
	}

	
		this.currentAnimation = this.animationCollection[this.setA];
	
	Entity.prototype.update.call(this);
}

Subzero.prototype.draw = function(ctx) {
	this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scaleBy);
	Entity.prototype.draw.call(this);
}