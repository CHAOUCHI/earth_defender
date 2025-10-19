import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";

export class Game{
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;
    private player : Player;

    constructor(){
        // Init Game canvas
        // Codez ici...
        const canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }

    public start() : void{
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        
        // J'instancie le Player avec new
        // Codez ici...
        

        // Je le dessine avec this.draw
        // Codez ici...

        // N'oubliez pas d'importer la classe GameObject
        // en ecrivant .js dans votre import
        const gameObject = new GameObject(this);
        this.draw(gameObject);


        // Démarre la boucle de jeu
        this.loop();
    }

    private draw(gameObject : GameObject) : void{
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        )
    }

    private loop(){
        setInterval(()=>{
            console.log("Frame!");
        },10)
    }

}