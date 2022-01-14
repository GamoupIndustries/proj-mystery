class Title extends Phaser.Scene {
  constructor() {
    super("title");
  }
  preload() {
    this.load.image("player", "assets/images/player.png");
  }
  create() {
    var text = this.add.text(20, 20, "Loading Game...");
    var player = this.add.image(270, 270, "player");
  }
  update() {
    if (event.keyCode == 37) {
        player.x -= 3;
    }
  }
}
