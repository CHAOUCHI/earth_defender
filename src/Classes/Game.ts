import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";

export class Game{
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;
    private player : Player;

    private alien : Alien;

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
        
        this.player = new Player(this);
        this.draw(this.player);

        this.alien = new Alien(this);
        this.draw(this.alien);

        // Ecoute les inputs
        Input.listen();

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

            this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);

            this.draw(this.player);
            this.player.callUpdate();

            this.draw(this.alien);
            this.alien.callUpdate();

        },10)
    }

}