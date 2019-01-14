import { Car } from "./car.js";

const statsElement = document.querySelector('#stats');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const carImage = new Car(canvas.width / 2, canvas.height / 2);

!function loop(){

    showValues();

    carImage.update();

    context.beginPath();
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(carImage.canvas, carImage.posX, carImage.posY);
    context.closePath();

    requestAnimationFrame(loop);
}();


function showValues(){
    statsElement.innerHTML = `
        <table>
            ${Object.keys(carImage).map(prop => `
                <tr>
                    <td>${prop}</td>
                    <td>${carImage[prop]}</td>
                </tr>
            `).join('')}
        </table>
    `;
}


window.addEventListener('keydown', e => {
    switch (e.key) {
        case "ArrowUp":
            carImage.acceleration += 1;
            break;
        case "ArrowDown":
            carImage.acceleration -= 1;
            break;
        case "ArrowLeft":
            carImage.direction -= 1;
            carImage.rotate();
            break;
        case "ArrowRight":
            carImage.direction += 1;
            carImage.rotate();
            break;
    }
})