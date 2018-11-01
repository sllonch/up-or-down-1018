function Game() {
  this.score = 0;
  this.step = 0;
  this.cards = [1, 3, 2, 4];
}

Game.prototype.start = function() {

  this.gameScreen = buildDOM(`
  <main>
    <p class="lives">3</p>     
    <canvas width="640px" height="480px"></canvas>   
  </main>
`);

  document.body.prepend(this.gameScreen);

  setTimeout(function() {
    this.finishGame();
  }.bind(this), 3000)

}

Game.prototype.startTimer = function() {

}

Game.prototype.nextCard = function() {

}

Game.prototype.checkAnswer = function() {

}

Game.prototype.setGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function() {
  this.gameScreen.remove();
  this.gameOverCallback();
}
