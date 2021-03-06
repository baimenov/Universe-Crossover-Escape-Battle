/*
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
    frames, loop, reverse, saveLast, readyFrames) 
    */
function Ryu(game, x, y) {
    this.name = "Ryu";
    this.velocity = { x: 200, y: 50 };

    //this.actualWidth = 50;
    //this.actualHeight = 90;

    this.punchFrames = [new Frame(5, 170, 50, 100), new Frame(58, 170, 72, 100)];
    this.punchFrames2 = [new Frame(5, 170, 50, 100), new Frame(58, 170, 72, 100)];
    this.punchFrames3 = [new Frame(434, 170, 53, 100), new Frame(490, 170, 59, 100), new Frame(554, 170, 75, 100), new Frame(490, 170, 59, 100), new Frame(434, 170, 53, 100)];

    this.kickFrames = [new Frame(145, 315, 50, 90), new Frame(5, 315, 58 , 90), new Frame(75, 315, 60 , 90), new Frame(5, 315, 58 , 90), new Frame(145, 315, 50, 90)];
    this.kickFrames2 = [new Frame(145, 315, 50, 90), new Frame(5, 315, 58 , 90), new Frame(75, 315, 60 , 90), new Frame(5, 315, 58 , 90), new Frame(145, 315, 50, 90)];

    // these frames are not used
    this.jumpKickFrames = [new Frame(1051, 908, 53, 128), new Frame(1108, 908, 86, 128),
                            new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
                            new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128),
                            new Frame(1108, 908, 86, 128),new Frame(1108, 908, 86, 128)];

    this.uppercutFrames = [new Frame(760, 618, 62, 120), new Frame(835, 618, 58, 120)];

    this.blockFrames = [new Frame(344, 641, 45, 90)];

    this.jumpFrames = [new Frame(65, 468, 50, 100), new Frame(135, 415, 50 , 80), new Frame(195, 440, 50, 100)];

    this.knockBackFrames = [new Frame(396, 1614, 58, 100), new Frame(464, 1614, 70, 100), new Frame(594, 1614, 84, 100), new Frame(680, 1614, 84, 100)];

    this.idleAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 163, 40, 50, 100, 0.15, 4, true, false, false, null);
    this.idleLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1937, 40, 50, 100, 0.15, 4, true, true, false, null);

    this.moveAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 48, 646, 49, 86, 0.15, 4, true, true, false, null);
    this.moveLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 2056, 646, 49, 86, 0.15, 4, true, true, false, null);

    this.crouchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 549, 642, 50, 100, 0.15, 1, true,  false, false, null);
    this.crouchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1701, 642,  50, 100, 0.15, 1, true,  true, false, null);

    this.punchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 5, 160, 50, 100, 0.15, this.punchFrames.length, false, false, false, this.punchFrames)
    this.punchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 5, 160, 50, 100, 0.15, this.punchFrames.length, false, true, false, this.punchFrames);

    this.punchRight2Animation = new Animation(AM.getAsset("./img/Ryu.png"), 5, 160, 50, 100, 0.15, this.punchFrames2.length, false, false, false, this.punchFrames2);
    this.punchLeft2Animation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 5, 160, 50, 100, 0.15, this.punchFrames2.length, false, true, false, this.punchFrames2);

    this.punchRight3Animation = new Animation(AM.getAsset("./img/Ryu.png"), 434, 170, 53, 100, 0.15, this.punchFrames3.length, false, false, false, this.punchFrames3);
    this.punchLeft3Animation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 434, 170, 53, 100, 0.15, this.punchFrames3.length, false, true, false, this.punchFrames3);

    this.kickRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 145, 315, 50, 100, 0.15, this.kickFrames.length, false, false, false, this.kickFrames);
    this.kickLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 145, 315, 50, 100, 0.15, this.kickFrames.length, false, true, false, this.kickFrames);

    this.kickRight2Animation = new Animation(AM.getAsset("./img/Ryu.png"), 145, 315, 50, 100, 0.15, this.kickFrames2.length, false, false, false, this.kickFrames2);
    this.kickLeft2Animation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 145, 315, 50, 100, 0.15, this.kickFrames2.length, false, true, false, this.kickFrames2);

    this.blockRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 345, 647, 45, 85, 0.15, this.blockFrames.length, false, false, true, this.blockFrames);
    this.blockLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 345, 647, 45, 85, 0.15, this.blockFrames.length, false, true, false, this.blockFrames);

    this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 395, 640, 45, 90, 0.07, 1, false, false, true, null);
    this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1705, 640, 45, 90, 0.07, 1, false, true, true, null);

    this.jumpRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 195, 440, 50, 100, 0.3, this.jumpFrames.length, false, false, false, this.jumpFrames);
    this.jumpLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 195, 440, 50, 100, 0.3, this.jumpFrames.length, false, true, false, this.jumpFrames);

    this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"),
         1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, false, true, this.jumpKickFrames);

    this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"),
         1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, true, true, this.jumpKickFrames);

    this.uppercutRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 14, 907, 58, 128, 0.2, this.uppercutFrames.length, false, false, false, this.uppercutFrames);
    this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 14, 907, 58, 128, 0.2, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

    this.knockBackRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 65, 468, 50, 100, 0.10, this.knockBackFrames.length, false, false, false, this.knockBackFrames);
    this.knockBackLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 65, 468, 50, 100, 0.10, this.knockBackFrames.length, false, true, false, this.knockBackFrames);

    this.attackedRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 34, 1620, 55, 85, 0.2, 2, false, false, false, null);
    this.attackedLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 2156, 1620, 55, 85, 0.2, 2, false, true, false, null);

    this.currentAnimation = this.idleAnimation;
    //Ryu's movement speed.
    this.speed = 5;
    
    //Ryu's states.
    this.movingRight = false;
    this.movingLeft = false;
    this.idling = true;
    this.crouching = false;
    
    this.facing = "R";

    this.punching = false;
    this.punching2 = false;
    this.punching3 = false;

    this.kicking = false;

    this.blocking = false;
    this.jumping = false;

    //this.jumpKicking = false;

    this.uppercutting = false;

    this.isBot = false;

    this.boxWidth = 58;
    this.boxHeight = 128;

    this.actualWidth = 50;
    this.actualHeight = 90;

    this.gettingAttacked = false;
    this.gettingAttackedCounter = 0;

    this.scaleBy = 3;

    this.currentBox = (50, 420, 58 * this.scaleBy, 128 * this.scaleBy);

    this.healthBar = new HealthBar(100, this.game, 20, 20);

    this.attackDamageMap = new Map();

    this.attackDamageMap.set(this.punching, 0.5);
    this.attackDamageMap.set(this.punching2, 0.3);
    this.attackDamageMap.set(this.punching3, 0.15);
    this.attackDamageMap.set(this.kicking, 0.4);
    this.attackDamageMap.set(this.kicking2, 0.2);

    this.animationCollection = [this.idleAnimation, this.idleLeftAnimation,
            this.moveAnimation, this.moveLeftAnimation, this.crouchRightAnimation,
            this.crouchLeftAnimation, this.blockRightAnimation,
            this.blockLeftAnimation, this.blockCrouchRightAnimation,
            this.blockCrouchLeftAnimation, this.punchRightAnimation,
            this.punchLeftAnimation, this.punchRight2Animation, this.punchLeft2Animation,
            this.punchRight3Animation, this.punchLeft3Animation, this.kickRightAnimation,
            this.kickLeftAnimation, this.kickRight2Animation, this.kickLeft2Animation,
            this.jumpRightAnimation, this.jumpLeftAnimation, this.jumpKickRightAnimation,
            this.jumpKickLeftAnimation, this.uppercutRightAnimation, this.uppercutLeftAnimation,
            this.attackedRightAnimation, this.attackedLeftAnimation,
            this.knockBackRightAnimation, this.knockBackLeftAnimation];

    for (var i = 0; i < this.animationCollection.length; i++) {
        //console.log(i);
        this.animationCollection[i].actualWidth = 50;
        this.animationCollection[i].actualHeight = 90;
    }
    //this.healthBar = new HealthBar(100, this.game, 20, 100);

    this.xView = x;
    this.yView = y;

    Entity.call(this, game, x, y);
}

var attack = false;

Ryu.prototype = new Entity();
Ryu.prototype.constructor = Ryu;

//Updates Ryu's state (frame).
/*Current bugs (features) :
1) If you press crouch and punch while jumping, then
Ryu will uppercut when lands.
*/
var count = 0;
var count2 = 0

/*
Checks gameEngine states and changes Character's states
depending on them.
*/
Ryu.prototype.checkGameStates = function() {
    if (!this.game.crouch) {
            this.crouchRightAnimation.elapsedTime = 0;
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
            //  this.jumpKicking = true;
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
        //  this.jumping = true;
        //  this.idling = false;
        //  this.crouching = false;
            //this.movingRight = false;
        //  this.punching = false;
        //  this.blocking = false; }
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
Ryu.prototype.checkMyStates = function() {
    if (this.gettingAttacked) {
        if (!this.blocking) {
            this.gettingAttackedCounter++;
        }

        //this.jumping = false;
        this.punching = false;
        this.punching2 = false;
        this.punching3 = false;
        this.kicking = false;
        this.kicking2 = false;
        //this.crouching = false;
        if (this.jumping) {
            this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
            this.jumping = false;
            this.y = 420;
            if (this.currentAnimation.isDone()) {
                this.currentAnimation.elapsedTime = 0;
                this.gettingAttacked = false;
                //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
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
                        //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
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
            //console.log("this.jumping is true");
            if (this.facing === "R") {
                
            //  if (this.jumpKicking) {
                    //this.jumpRightAnimation.readyFrames = this.jumpKickFrames;
                //} else {
                    this.currentAnimation = this.jumpRightAnimation;
                    jumpsnd.play();
                //}

                if (this.currentAnimation.isDone()) {
                    // this.jumpRightAnimation.readyFrames = null;
                    this.jumpKickRightAnimation.elapsedTime = 0;
                    this.jumpRightAnimation.elapsedTime = 0;
                    this.jumping = false;
                    //this.jumpKicking = false;
                    this.game.jumpKick = null;
                    this.game.jump = null;
                }
                //console.log("Ryus move right " +  this.movingRight);
                if (this.movingRight && this.x < 3720) {
                    this.x += this.speed;
                }

                if ((this.x < 640) || (this.x > 3200 && this.x < 3720)) {
                    this.xView += this.speed;
                }
            } else if (this.facing === "L") {
                //if (this.jumpKicking) {
                    //this.jumpLeftAnimation.readyFrames = this.jumpKickFrames;
                //} else {
                    this.currentAnimation = this.jumpLeftAnimation;
                    jumpsnd.play();
                //}
                if (this.currentAnimation.isDone()) {
                    // this.jumpLeftAnimation.readyFrames = null;
                    this.jumpLeftAnimation.elapsedTime = 0;
                    this.jumpKickLeftAnimation.elapsedTime = 0;
                    //this.jumpKicking = false;
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
            //IF THIS IS NOT GETTING ATTACKED THE DO IT
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
                this.currentAnimation = this.crouchRightAnimation;
                
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


Ryu.prototype.update = function() {

    // if (this.healthBar.hp <= 0) {
    //     this.removeFromWorld = true;
    // }
    var enemies = 0;
    for (var i = 0; i < this.game.entities.length; i++) {
        if (this.game.entities[i].isBot) {
            enemies++;
        }
    }

    //if true then go to next stage!
    if (enemies <= 0) {
        
        if (this.stage === 0 || this.stage === 1) {
            //Go to Ryu
            for (var i = 0; i < this.game.entities.length; i++) {
                if (this.game.entities[i] instanceof Background) {
                    this.game.entities[i].setNew(AM.getAsset("./img/namekbgr.png"));
                } else if (this.game.entities[i] instanceof Ryu) {
                    this.game.entities[i] = new Goku(this.game, 200, 420);
                    console.log(this.game.entities[i].healthBar.y);
                    this.game.entities[i].stage = this.stage + 1;
                    for (var j = 0; j < this.game.entities.length; j++) {
                        if (this.game.entities[j] instanceof Camera) {
                            this.game.entities[j].follow(this.game.entities[i],
                                document.getElementById("gameWorld").width/2, document.getElementById("gameWorld").height/2);
                        }
                    }
                }
            }
            var kenBot = new Frieza(this.game, 1200, 420);
            kenBot.isBot = true;
            kenBot.speed = 2;
            kenBot.healthBar.x = 740;
            kenBot.healthBar.y = 20;
            kenBot.healthBar.hp = 70;
            var kenBot2 = new Frieza(this.game, 4500, 420);
            kenBot2.isBot = true;
            kenBot2.speed = 2;
            kenBot2.healthBar.x = 740;
            kenBot2.healthBar.y = 50;
            kenBot2.healthBar.hp = 70;
            var kenBot3 = new Frieza(this.game, 8300, 420);
            kenBot3.isBot = true;
            kenBot3.speed = 3;
            kenBot3.healthBar.x = 740;
            kenBot3.healthBar.y = 80;
            kenBot3.healthBar.hp = 70;
            this.game.addEntity(kenBot);
            this.game.addEntity(kenBot2);
            this.game.addEntity(kenBot3);
        } else if (this.stage === 2) {
            //Game over .
            console.log("game over");
        }
        
    }
     
    if (this.healthBar.hp <= 0) {
        this.healthBar.hp = 0;
        if (!this.isBot) {
            this.game.addEntity(new GameOver(this.game, this.game.xView + 340, this.game.yView + 200));
        }
        this.removeFromWorld = true;
    }else  if (!this.isBot) {
        
        this.checkGameStates();

        this.checkMyStates();
        

         
        //var heightDiff = this.boxHeight - this.currentAnimation.getFrameHeight();
        //this.y = heightDiff === 0 ? this.y : this.y + (heightDiff * this.scaleBy);
        //this.currentAnimation.getFrameWidth();
        //this.currentAnimation.getFrameHeight();
        
        //console.log("my x is: " + this.x);
        //console.log("myHeight is: " + this.currentAnimation.getFrameHeight());
        //console.log("myWidth is:  " + this.currentAnimation.getFrameWidth());

    } else {
        // if (!this.gettingAttacked) {
        //  var next = Math.random();
            
        //      this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
        // }
    }

    //console.log("my y is: " + this.currentAnimation.getY(this.y, this.scaleBy) + 
            //"\n my x is: " + this.x + "\n myHeight is: " + this.currentAnimation.getFrameHeight() * this.scaleBy + 
        //"\n myWidth is:  " + this.currentAnimation.getFrameWidth() * this.scaleBy);
        var currentBox = new Box(this.currentAnimation.getX(this.x, this.scaleBy),
            this.currentAnimation.getY(this.y, this.scaleBy),
            this.currentAnimation.getFrameWidth() * this.scaleBy,
            this.currentAnimation.getFrameHeight() * this.scaleBy);
        this.currentBox = currentBox;

    //Detect collision with other entities
    var range = 116
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
                            //ent.currentAnimation = ent.facing === "L" ? ent.idleLeftAnimation : ent.idleRightAnimation;
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
                                //ent.currentAnimation = ent.facing === "L" ? ent.idleLeftAnimation : ent.idleRightAnimation;
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
                    if (this.x > ent.x && Math.abs(this.x - ent.x) < range) {
                        
                        count++;
        
                        if(count % 50 == 0) {
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
                                this.attackHandler(ent, 3);

                            } else {
                                this.attackHandler(ent, 9);
                                //ent.currentAnimation =  ent.attackedRightAnimation;
                                ent.gettingAttacked = true;
                            }
                            if (ent.currentAnimation.isDone()) {
            
                                ent.currentAnimation.elapsedTime = 0;
                                ent.gettingAttacked = false;
                                //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
                            }   
                        }
                        
                        //ent.velocity = 0;

                        //Player on the left
                    } if (this.x < ent.x && (Math.abs(this.x - ent.x) < range+60)) {
                        
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
                                //  console.log("I'm done kicking right")
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
                                this.attackHandler(ent, 3)
                            } else {
                                this.attackHandler(ent, 9);
                                ent.currentAnimation =  ent.attackedLeftAnimation;
                            }
                            if (ent.currentAnimation.isDone()) {
            
                                ent.currentAnimation.elapsedTime = 0;
                                ent.gettingAttacked = false;
                                //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
                            }   
                        }
                    }
                    // Ryu.prototype.isAttacking = function() {
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
                    // console.log("Ryu "+ ent.x);
                    if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
                        ent.facing = "L";
                        ent.currentAnimation = ent.moveLeftAnimation;
                        ent.x -= ent.speed;
                    }
                    else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range-10)) {
                        ent.facing = "R";
                        ent.currentAnimation = ent.moveAnimation;
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
        //  console.log("They collide!");

        //  if (this.isAttacking()) {
        //      if (this.facing === "R" && this.isToTheLeftOf(ent)) {
        //          if (!ent.blocking) {
        //              this.attackHandler(ent, 1);
        //          } else {
        //              this.attackHandler(ent, 0.3);
        //          }
        //          ent.facing = "L";
        //      } else if (this.facing === "L" && !this.isToTheLeftOf(ent)) {
        //          if (!ent.blocking) {
        //              this.attackHandler(ent, 1);
        //          } else {
        //              this.attackHandler(ent, 0.3);
        //          }
        //          ent.facing = "R";
        //      }
        //  }
        // }
    }

    if (!this.isBot) {
        //console.log("blocking is: " + this.blocking);
    }
    Entity.prototype.update.call(this);
}

Ryu.prototype.collide = function(other) {
    return this.currentBox.collide(other.currentBox);
}

Ryu.prototype.isAttacking = function() {
    return (this.punching || this.punching2 || this.punching3
        || this.kicking || this.kicking2 || this.uppercutting
        || this.jumpKicking);
}

Ryu.prototype.isToTheLeftOf = function(other) {
    return (this.x < other.x);
}

Ryu.prototype.getAttackType = function() {
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

Ryu.prototype.attackHandler = function(other, mult) {
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
Ryu.prototype.draw = function(ctx, xView, yView) {
    this.healthBar.draw(ctx);
        this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
    Entity.prototype.draw.call(this);
}