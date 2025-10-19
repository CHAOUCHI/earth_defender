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
    return Game;
}());
export { Game };
