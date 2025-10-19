export class Input {

    private static axisX : Direction = 0;

    public static getAxisX() : Direction{
        return this.axisX;
    }

    public static listen(){
        // Codez ici...
        window.addEventListener("keydown",(event)=>{
            console.log(event.key)
            switch (event.key) {
                case "d":
                case "D":
                    Input.axisX = 1;
                    
                    break;
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                default:
                    break;
            }
        });
        window.addEventListener("keyup",(event)=>{
            switch (event.key) {
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                default:
                    break;
            }
        });
    }
}

export type Direction = 0 | 1 | -1;