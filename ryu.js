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
