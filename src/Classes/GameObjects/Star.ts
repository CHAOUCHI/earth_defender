import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject{

    protected start(): void {
        this.setPosition({
            x : Math.random() * this.getGame().CANVAS_WIDTH,
            y : Math.random() * this.getGame().CANVAS_HEIGHT
        });
        this.setImage(Assets.getStarImage())
    }

    protected update(): void {
        if(this.getPosition().y > this.getGame().CANVAS_HEIGHT){
            this.setPosition({
                x : this.getPosition().x,
                y : 0
            });
        }

        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y +10
        })
    }
}