import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Player extends GameObject {

    protected start(): void {
        this.setImage(Assets.getPlayerImage());
        // Codez ici...
        this.setPosition({ 
            x: this.getGame().CANVAS_WIDTH/2 - this.getImage().width/2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10 
        });
    }
}