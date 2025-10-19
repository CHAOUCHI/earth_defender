export class Input {

    private static axisX : Direction = 0;

    public static getAxisX() : Direction{
        return this.axisX;
    }

    public static listen(){
        // Codez ici...
    }
}

export type Direction = 0 | 1 | -1;