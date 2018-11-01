function Game() {
  this.score = 0;
  this.step = 0;
  this.cards = [1, 3, 2, 4];
}

Game.prototype.start = function() {

  this.gameScreen = buildDOM(`
    <main>
      <header>
        <p>Score: <span class="score"></span></p>
        <p>Time: <span class="time"></span></p>
      </header>
      <section class="game">
        <p class="left"></p>
        <button class="btn up">UP</button>
        <button class="btn down">DOWN</button>
        <p class="right"></p>
      </section>
      <footer>
        <p> Step <span class="step"></span> / 3</p>
      </footer>
    </main>
  `);

  document.body.prepend(this.gameScreen);

  this.scoreElement = this.gameScreen.querySelector('.score');
  this.scoreElement.innerText = this.score;

  this.timeElement = this.gameScreen.querySelector('.time');
  this.timeElement.innerText = 0;

  this.stepElement = this.gameScreen.querySelector('.step');
  this.stepElement.innerText = this.step + 1;

  this.leftNumberElement = this.gameScreen.querySelector('.left');
  this.rightNumberElement = this.gameScreen.querySelector('.right');

  this.buttonUpElement = this.gameScreen.querySelector('.btn.up');
  this.buttonDownElement = this.gameScreen.querySelector('.btn.down');

  this.leftNumberElement.innerText = this.cards[this.step]


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
