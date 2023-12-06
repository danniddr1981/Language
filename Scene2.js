class Scene2 extends Phaser.Scene {
	constructor() {
		super("playGame");
	}
	create () {
        this.add.text(20, 20, "Playing Game", { color: "#00ff00", font: "25px Arial", fill: "Yellow" }).setOrigin(0.5, 0);
	}
}
