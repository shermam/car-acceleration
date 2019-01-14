import { toDegrees, toRadians } from "./math.js";

export class Car{
    constructor(x, y){

        this.direction = 0;
        this.acceleration = 0;

        this.posX = x;
        this.posY = y;

        this.speed = 0;

        this.scale = 0.001;
        this.angle = toRadians(this.direction);

        this.canvas = document.createElement('canvas');
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.context = this.canvas.getContext('2d');
        this.image = new Image;
        this.image.onload = () => {
            this.context.drawImage(this.image, 0,0,this.canvas.width, this.canvas.height);
        }
        this.image.src = 'car.png'; 
        this.rotate = this.rotate.bind(this);
        this.update = this.update.bind(this);
    }

    update(){

        this.speed += (this.acceleration * this.scale);

        this.posX += Math.sin(this.angle) * this.speed;;
        this.posY += -(Math.cos(this.angle) * this.speed);
    }

    rotate(){

        this.angle = toRadians(this.direction);
        
        const centerX = this.canvas.width/2;
        const centerY = this.canvas.height/2;
        
        this.context.save();
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.context.translate(centerX, centerY);
        this.context.rotate(this.angle);        
        this.context.drawImage(this.image, -centerX, -centerY, this.canvas.width, this.canvas.height);
        this.context.restore();        
    }
}

