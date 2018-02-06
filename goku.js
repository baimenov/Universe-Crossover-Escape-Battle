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
