import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // Init Game canvas
        // Codez ici...
        var canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }
    Game.prototype.start = function () {
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // J'instancie le Player avec new
        // Codez ici...
        this.player = new Player(this);
        // Je le dessine avec this.draw
        // Codez ici...
        this.draw(this.player);
        // N'oubliez pas d'importer la classe GameObject
        // en ecrivant .js dans votre import
        var gameObject = new GameObject(this);
        this.draw(gameObject);
        // Démarre la boucle de jeu
        this.loop();
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        setInterval(function () {
            console.log("Frame!");
        }, 10);
    };
    return Game;
}());
export { Game };
