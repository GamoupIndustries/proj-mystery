class Title extends Phaser.Scene {
  constructor() {
    super("title");
  }
  preload() {
    
  }
  create() {
    var text = this.add.text(20, 20, "Hello World");
  }
  update() {
    
  }
}
