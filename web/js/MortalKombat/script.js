const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4;
const background = new Sprite({
    position: {x: 0, y: 0},
    imageSrc: './web/img/Background.png',
})

const Player = new Fighter({
    position:{x: 0,
        y: 0},
    velocity:{x: 0,
        y: 0},
    imageSrc: './web/img/Sprite/MedievalWarriorPack/Idle.png',
    framesMax: 6,
    scale: 2.5,
    offset: {x: 44,
        y: 81},
    sprites: {
        idle :{
            imageSrc: './web/img/Sprite/MedievalWarriorPack/Idle.png',
            framesMax: 6,
        },
    run :{
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Run.png',
        framesMax: 8,
    },
    jump : {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Jump.png',
        framesMax: 2,

    },
    fall : {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Fall.png',
        framesMax: 2,
    },
    attack1 : {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Attack1.png',
        framesMax: 4,
    },
    hit : {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Hit.png',
        framesMax: 3,
    },
    death : {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Death.png',
        framesMax: 9,
    },
    run2: {
        imageSrc: './web/img/Sprite/MedievalWarriorPack/Run2.png',
        framesMax: 8,
    }
    },
    attackBox: {
        offset: {x: 90, y: 100},
        width: 160,
        height: 50,
    }
});

const Enemy = new Fighter({
    position:{x: canvas.width-300,
        y: 0},
    velocity:{x: 0,
        y: 0},
    imageSrc: './web/img/Sprite/MedievalKingPack/Idle.png',
    framesMax: 6,
    scale: 2.7,
    offset: {x: 34,
        y: 81},
    sprites: {
        idle :{
            imageSrc: './web/img/Sprite/MedievalKingPack/Idle.png',
            framesMax: 6,
        },
        run :{
            imageSrc: './web/img/Sprite/MedievalKingPack/Run.png',
            framesMax: 8,
        },
        run2 :{
            imageSrc: './web/img/Sprite/MedievalKingPack/Run2.png',
            framesMax: 8,
        },
        jump : {
            imageSrc: './web/img/Sprite/MedievalKingPack/Jump.png',
            framesMax: 2,

        },
        fall : {
            imageSrc: './web/img/Sprite/MedievalKingPack/Fall.png',
            framesMax: 2,
        },
        attack1 : {
            imageSrc: './web/img/Sprite/MedievalKingPack/Attack1.png',
            framesMax: 6,
        },
        hit : {
            imageSrc: './web/img/Sprite/MedievalKingPack/Hit.png',
            framesMax: 4,
        },
        death : {
            imageSrc: './web/img/Sprite/MedievalKingPack/Death.png',
            framesMax: 11,
        }


    },
    attackBox: {
        offset: {x: -160, y: 100},
        width: 100,
        height: 50,
    }
});




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

decreaseTimer()
function  animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.drawbackground();
    Player.update();
    Enemy.update();

    Player.velocity.x = 0;
    Enemy.velocity.x = 0;

    // Player
    if(keys.q.pressed && Player.lastKey === 'q') {
        Player.velocity.x = -3;
        Player.switchSprite('run2')
    } else if(keys.d.pressed && Player.lastKey === 'd') {
        Player.velocity.x = 3;
       Player.switchSprite('run')
    }else {
        Player.switchSprite('idle')
    }

     if(Player.velocity.y<0){
         Player.switchSprite('jump')
     } else if(Player.velocity.y>0){
            Player.switchSprite('fall')
     }

    // Enemy
    if(keys.ArrowLeft.pressed && Enemy.lastKey === 'ArrowLeft') {
        Enemy.velocity.x = -3;
        Enemy.switchSprite('run')
    }
    else if(keys.ArrowRight.pressed && Enemy.lastKey === 'ArrowRight') {
        Enemy.velocity.x = 3;
        Enemy.switchSprite('run2')
    }else {
        Enemy.switchSprite('idle')
    }

    if(Enemy.velocity.y<0){
        Enemy.switchSprite('jump')
    } else if(Enemy.velocity.y>0){
        Enemy.switchSprite('fall')
    }
    // Player Attack
    if(rectangelCollision(Player, Enemy) && Player.isAttacking) {
        Enemy.takeHit();
        Player.isAttacking = false;
        document.getElementById('EnemyHealth').style.width= Enemy.health + '%';
    }
    if(Player.isAttacking && Player.framesCurrent===3) {
        Player.isAttacking = false;
    }




    // Ennemy Attack
    if(rectangelCollision(Enemy, Player) && Enemy.isAttacking) {
        Player.takeHit();
        Enemy.isAttacking = false;
        document.getElementById('PlayerHealth').style.width= Player.health + '%';
        console.log('Enemy Collision');
    }
    if(Enemy.isAttacking && Enemy.framesCurrent===3) {
        Enemy.isAttacking = false;
    }

    //End game based on health
    if(Enemy.health<=0 || Player.health<=0) {
        determineWinner(Player,Enemy,timerId)
    }
}



animate();

window.addEventListener('keydown', (event) => {
    if(!Player.dead) {


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
                Player.velocity.y = -16;
                break;
            case ' ':
                Player.attack();
                break;
        }
    }
    if(!Enemy.dead) {
        switch (event.key) {
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                Enemy.lastKey = 'ArrowRight'
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                Enemy.lastKey = 'ArrowLeft'
                break;
            case 'ArrowUp':
                Enemy.velocity.y = -16;
                break;
            case 'ArrowDown':
                Enemy.attack();
                break;
        }
    }

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
})