const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4;
class Sprite {
    constructor({position,velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 150;
        this.lastKey ;
    }
    draw() {
        c.fillStyle = 'white';
        c.fillRect(this.position.x, this.position.y, 50,this.height);
    }
    update(){
        this.draw();
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;

        if(this.position.y + this.height+this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y+=gravity;
        }
    }
}
const Player = new Sprite({
    position:{x: 0,
        y: 0},
    velocity:{x: 0,
        y: 0}

});
const Enemy = new Sprite({
    position:{x: 100,
        y: 100},
    velocity:{x: 0,
        y: 0}

});

console.log(Player);
console.log(Enemy);


const keys = {

    // Player
    q : {
        pressed: false,
    },
    d : {
        pressed: false,
    },
    z : {
        pressed: false,
    },
    // Enemy

    ArrowRight : {
        pressed: false,
    },
    ArrowLeft : {
        pressed: false,
    },
    ArrowUp : {
        pressed: false,
    }
}

function  animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    Player.update();
    Enemy.update();

    Player.velocity.x = 0;
    Enemy.velocity.x = 0;

    // Player
    if(keys.q.pressed && Player.lastKey === 'q') {
        Player.velocity.x = -3;
    }
     else if(keys.d.pressed && Player.lastKey === 'd') {
        Player.velocity.x = 3;
    }

    // Enemy
    if(keys.ArrowLeft.pressed && Enemy.lastKey === 'ArrowLeft') {
        Enemy.velocity.x = -5;
    }
    else if(keys.ArrowRight.pressed && Enemy.lastKey === 'ArrowRight') {
        Enemy.velocity.x = 5;
    }
}

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            Player.lastKey = 'd';
            break;
        case 'q':
           keys.q.pressed = true;
            Player.lastKey = 'q';
            break;
        case 'z':
            Player.velocity.y = -20;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            Enemy.lastKey = 'ArrowRight'
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            Enemy.lastKey = 'ArrowLeft'
            break;
        case 'ArrowUp':
            Enemy.velocity.y = -10;
            break;
    }
    console.log(event.key);
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'q':
            keys.q.pressed = false;
            break;
    }

    // Enemy
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
    }
    console.log(event);
})