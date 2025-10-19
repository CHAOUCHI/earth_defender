import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Player extends GameObject{

    protected start():void{
        this.setImage(Assets.getPlayerImage());
        // Codez ici...
    }
}