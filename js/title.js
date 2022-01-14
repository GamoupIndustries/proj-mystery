class Title extends Phaser.Scene {
  constructor() {
    super("title");
  }
  preload() {
    this.load.image("player", "assets/images/player.png");
  }
  create() {
    this.text = this.add.text(20, 20, "Hello World");
    this.player = this.add.image(270, 270, "player");
  }
  update() {
    
  }
}
