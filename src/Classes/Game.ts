export class Game{
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;

    constructor(){
        // Init Game canvas
        // Codez ici...
        const canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }

}