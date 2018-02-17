function Gokku(game) {
    this.name = "Gokku";
    //this.animation = new Animation(AM.getAsset("./img/RobotGokku.png"), 0, 0, 206, 110, 0.02, 30, true, true);
   // (spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse)
   this.animation = new Animation(AM.getAsset("./img/GokuSS.png"), 3, 390, 96, 158, .2, 6, true, false, false, null);
   this.kickAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 2383, 163, 158,.1, 6, false, false, false, null);
   this.jumpAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1415, 108, 162, .1, 8, false, false, false, null);
   this.leftAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1710, 140, 120, .2, 3, false, false, false, null);
   this.rightAnimation = new Animation(AM.getAsset("./img/GokuSS.png"), 0, 1840, 114, 143, .2, 3, false, false, false, null);
   this.currentAnimation = this.animation;
    this.jumping = false;
    this.kicking = false;
    this.m_left = false;
    this.radius = 100;
    this.ground = 400;
    this.scaleBy = 1.8;
    this.currentBox = (20, 120, 96 * this.scaleBy, 158 * this.scaleBy);
    this.velocity = { x: 5 * 1000, y: 5 * 1000 };
    this.healthBar = new HealthBar(100, this.game);
    
    Entity.call(this, game, 0, 400);
}
var attack = false;
var rand = Math.floor(Math.random() * Math.floor(2))



Gokku.prototype = new Entity();
Gokku.prototype.constructor = Gokku;
Gokku.prototype.collide = function(other) {
	return this.currentBox.collide(other.currentBox);
}
Gokku.prototype.isAttacking = function() {
	return (this.kicking)
}
var count = 0;
var count2 = 0
Gokku.prototype.update = function () {
    
    
                
    var currentBox = new Box(this.currentAnimation.getX(this.x, this.scaleBy),
			this.currentAnimation.getY(this.y, this.scaleBy),
			this.currentAnimation.getFrameWidth() * this.scaleBy,
			this.currentAnimation.getFrameHeight() * this.scaleBy);
        this.currentBox = currentBox;
        var range = 116
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];

		if (ent !== this && ent.currentBox && this.collide(ent)) {
            if(this.game.kick && this.currentAnimation.isDone()) {
                attack = true;
            } else {
                attack = false;
            }
            console.log(Math.abs(this.x - ent.x));
            if (this.x > ent.x && Math.abs(this.x - ent.x) < range) {
                
                count++;

                if(count % 50 == 0) {
                    rand = Math.floor(Math.random() * Math.floor(3))
                }
                //console.log("Right");
                if(this.kicking){
                    attack = true;
                    console.log("kicking");
                    ent.gettingAttacked == true;
                }
                if(!(attack)){
                    
                    console.log("Here's the random number "+ count);
                    //var rand = Math.floor(Math.random() * 3);
                    if(rand == 0){
                        ent.currentAnimation = ent.kickRightAnimation
                        console.log("Elapsed " + ent.game.clockTick)
                        if(ent.currentAnimation.isDone()) {
                            console.log("I'm done kicking right")
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }
                    if(rand == 1){
                        ent.currentAnimation = ent.punchRightAnimation
                        if(ent.currentAnimation.isDone()) {
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }
                    if(rand == 2) {
                        ent.currentAnimation = ent.blockRightAnimation
                        if(ent.currentAnimation.isDone()) {
                            
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }

                    
                }
                
                //ent.velocity = 0;
            } if (this.x < ent.x && (Math.abs(this.x - ent.x) < range+60)) {
                console.log("Left");
                if(count2 % 50 == 0) {
                    rand2 = Math.floor(Math.random() * Math.floor(3))
                }
                count2++;
                if(!(attack)){
                    if(rand2 == 0){
                        ent.currentAnimation = ent.kickLeftAnimation
                        console.log("Elapsed " + ent.game.clockTick)
                        if(ent.currentAnimation.isDone()) {
                            console.log("I'm done kicking right")
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }
                    if(rand2 == 1){
                        ent.currentAnimation = ent.punchLeftAnimation
                        if(ent.currentAnimation.isDone()) {
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }
                    if(rand2 == 2) {
                        ent.currentAnimation = ent.blockLeftAnimation
                        if(ent.currentAnimation.isDone()) {
                            
                            //rand = Math.floor(Math.random() * Math.floor(2))
                        }
                    }
                }
            }
            // Scorpion.prototype.isAttacking = function() {
            //     return (this.punching || this.punching2 || this.punching3
            //         || this.kicking || this.kicking2 || this.uppercutting
            //         || this.jumpKicking);
            //}
            this.attackHandler(ent, 0.3);
            //this.x += this.velocity.x * this.game.clockTick;
            //this.y += this.velocity.y * this.game.clockTick;
            //ent.x += ent.velocity.x * this.game.clockTick;
            //ent.y += ent.velocity.y * this.game.clockTick;

            //console.log("They collide!");
        }
       
        if(ent !== this && ent.currentBox && !(this.collide(ent))){
            //attack == false;
            console.log("THE NUMBER " + Math.abs(this.x - ent.x))
            console.log(this.x < ent.x);
            console.log("IF " + (Math.abs(this.x - ent.x) < range));
            //this.x += this.velocity.x * this.game.clockTick;
            // console.log("Box " +ent.currentBox);
            // console.log("Goku " +this.x);
            // console.log("Scorpion "+ ent.x);
            if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
                ent.facing = "L";
                ent.currentAnimation = ent.moveLeftAnimation;
                ent.x -= ent.velocity.x * this.game.clockTick;
            }
            else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range)) {
                ent.facing = "R";
                ent.currentAnimation = ent.moveAnimation
                ent.x += ent.velocity.x * this.game.clockTick;
            }
            if(this.game.kick && this.currentAnimation.isDone()) {
                attack = true;
            } else {
                attack = false;
            }
            
            
            

        }
    }
    if (this.game.space){ 
        this.jumping = true
        this.m_left = false;
        this.m_right = false;
    }
    if (this.game.kick) this.kicking = true;
    if(this.game.left) this.m_left = true; //else {this.m_left = false;}
    if(this.game.right) this.m_right = true;
    
   // this.animation.elapsedTime = 1;

    //console.log("I'm kicking " + this.kicking);
    //console.log("I'm jumping " + this.jumping);
    if(this.kicking) {
       //console.log("I got here");
       
        if (this.kickAnimation.isDone()) {
            this.kickAnimation.elapsedTime = 0;
            this.kicking = false;
            this.game.kick = null;
        }
        this.currentAnimation = this.kickAnimation;
    }
    else if(this.m_left) {
        this.currentAnimation = this.leftAnimation;
        if (this.leftAnimation.isDone()) {
            this.leftAnimation.elapsedTime = 0;
            this.m_left = false;
            this.game.left = null;
        }
     
        var leftDistance = this.leftAnimation.elapsedTime / this.leftAnimation.totalTime;
        var totalDistance = 10;
        this.x -= leftDistance+5;
    }
    else if(this.m_right) { 
        this.currentAnimation = this.rightAnimation;
        if (this.currentAnimation.isDone()) {
            this.rightAnimation.elapsedTime = 0;
            this.m_right = false;
            this.game.right = null;
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

    
    else if (this.jumping) {
         
        this.currentAnimation = this.jumpAnimation;
        if (this.currentAnimation.isDone()) {
            this.currentAnimation.elapsedTime = 0;
            this.jumping = false;
            this.game.space = null;
        }

        var jumpDistance = this.currentAnimation.elapsedTime / this.currentAnimation.totalTime;
        var totalHeight = 200;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
       // this.jumpAnimation.frameWidth -= 
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
        console.log(this.m_right);
        if(this.m_right) {
            console.log("KEEEF");
            this.x += 5;
        }
        if(this.m_left) {
           
            this.x -= 5;
        }
    }
    else{
        this.currentAnimation = this.animation;
    }
    Entity.prototype.update.call(this);
}

Gokku.prototype.attackHandler = function(other, mult) {
	if (this.currentAnimation === this.kickAnimation
		|| this.currentAnimation === this.kickAnimation) {
        other.healthBar.hp -= 0.5 * mult;
        }
	// } else if (this.currentAnimation === this.punchRight2Animation
	// 	|| this.currentAnimation === this.punchLeft2Animation) {
	// 	other.healthBar.hp -= 0.3 * mult;
	// } else if (this.currentAnimation === this.punchRight3Animation
	// 	|| this.currentAnimation === this.punchLeft3Animation) {
	// 	other.healthBar.hp -= 0.15 * mult;		
	// } else if (this.currentAnimation === this.kickRightAnimation
	// 	|| this.currentAnimation === this.kickAnimation) {
	// 	other.healthBar.hp -= 0.4 * mult;	
	// } else if (this.currentAnimation === this.kickAnimation
	// 	|| this.currentAnimation === this.kickAnimation) {
	// 	other.healthBar.hp -= 0.2 * mult;
	// }
	if (!other.blocking) {
		other.gettingAttacked = true;
	}
}

Gokku.prototype.draw = function (ctx) {
    //time = this.leftAnimation.elapsedTime;
    
    this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scaleBy);

    
    // }else {
    //     this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    // }
    
    Entity.prototype.draw.call(this);
}
