class Scene1 extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}
  create() {
        this.add.text(20, 20, 'Starting Game...', { color: '#00ff00' }).setOrigin(0.5, 0);
  }
}
