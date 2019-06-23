import "phaser";
import { Version } from "../version";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");

    console.log(`GameScene::constructor() : ${Version}`);
  }

  preload() {
  }

  create() {
  }

  update() {
  }
}
