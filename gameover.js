function GameOver(game, x, y) {
	this.frames = [new Frame(0, 0, 140, 34), new Frame(0, 39, 140, 30),
					new Frame(0, 73, 140, 30), new Frame(0, 112, 140, 20)];
	this.currentAnimation = new Animation(AM.getAsset("./img/GameOver.png"),
		0, 0, 140, 34, 0.12, this.frames.length, false, false, true, this.frames);
	this.currentAnimation.actualWidth = 140;
	this.currentAnimation.actualHeight = 34;

	this.appear = true;

	this.scaleBy = 4;

	Entity.call(this, game, x, y);
}

GameOver.prototype = new Entity();
GameOver.prototype.constructor = GameOver;

GameOver.prototype.update = function(){

}

GameOver.prototype.draw = function(ctx, xView, yView) {
	if (this.appear) {
		//console.log("drawing");
		this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x - xView, this.y - yView, this.scaleBy);
	}
}