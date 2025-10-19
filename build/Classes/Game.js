import { Alien } from "./GameObjects/Alien.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
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
        this.player = new Player(this);
        this.draw(this.player);
        this.alien = new Alien(this);
        this.draw(this.alien);
        // Ecoute les inputs
        Input.listen();
        // Démarre la boucle de jeu
        this.loop();
    };
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.draw(_this.player);
            _this.player.callUpdate();
            _this.draw(_this.alien);
            _this.alien.callUpdate();
        }, 10);
    };
    return Game;
}());
export { Game };
