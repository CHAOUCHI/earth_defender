import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Input } from "./Input.js";

export class Game {
    private context: CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;
    private player: Player;

    private nbAliens: number = 10;

    private gameObjects: GameObject[] = [];

    constructor() {
        // Init Game canvas
        // Codez ici...
        const canvas = document.querySelector("canvas");
        this.context = canvas.getContext("2d");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }

    public start(): void {
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);


        /**
         * Instanciation des Stars
         */
        for (let i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }

        // Instancier 10 aliens
        // Codez ici ...
        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));

        }

        this.player = new Player(this);
        this.instanciate(this.player);

        // Ecoute les inputs
        Input.listen();

        // Démarre la boucle de jeu
        this.loop();
    }

    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    private draw(gameObject: GameObject): void {
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        )
    }

    private loop() {
        setInterval(() => {

            this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

            this.gameObjects.forEach(go => {
                go.callUpdate();
                this.draw(go);
                if(go instanceof Alien && this.player.overlap(go)){
                    console.log("Alien touche le joueur");
                }
            });


        }, 10)
    }



}