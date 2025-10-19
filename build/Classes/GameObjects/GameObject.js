import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    GameObject.prototype.setImage = function (image) {
        this.image = image;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    /**
     * Vérifie si l'autre GameObject entre en collision avec ce GameObject
     */
    GameObject.prototype.overlap = function (other) {
        // Codez ici ...
        throw Error("Not implemented yet");
    };
    // Implemented by child Classes
    GameObject.prototype.start = function () { };
    // Implemented by child Classes
    GameObject.prototype.update = function () { };
    // Called by Game class
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    return GameObject;
}());
export { GameObject };
