import { Alien } from "./GameObjects/Alien.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Input } from "./Input.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.nbAliens = 10;
        this.gameObjects = [];
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
        /**
         * Instanciation des Stars
         */
        for (var i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }
        // Instancier 10 aliens
        // Codez ici ...
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        this.player = new Player(this);
        this.instanciate(this.player);
        // Ecoute les inputs
        Input.listen();
        // Démarre la boucle de jeu
        this.loop();
    };
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
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
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
                _this.gameObjects.forEach(function (other) {
                    if (other != go && go.overlap(other)) {
                        console.log("Deux Gos différents se touchent");
                        go.callCollide(other);
                    }
                });
            });
        }, 10);
    };
    Game.prototype.over = function () {
        alert("GameOver!");
        window.location.reload();
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destory = function (gameObject) {
        // Codez ici ...
        // Supprimer gameObject du tableau de gameObjects
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
    };
    return Game;
}());
export { Game };
