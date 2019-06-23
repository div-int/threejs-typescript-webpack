import "phaser";
import config from "./config/config";
import GameScene from "./scenes/gamescene";

class MyGame extends Phaser.Game {

  version:string;

  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);

    this.scene.add("GameScene", GameScene);
    this.scene.start("GameScene");
  }

  getVersion() {
    return this.version;
  }
}

window.onload = function() {
  var myGame = new MyGame(config);
};
