const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = window.innerWidth-20;
canvas.height = window.innerHeight-20;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4;
const background = new Sprite({
    position: {x: 0, y: 0},
    imageSrc: './img/Background.png',
})

const Player = new Fighter({
    position:{x: 0,
        y: 0},
    velocity:{x: 0,
        y: 0},
    imageSrc: './Sprite/MedievalWarriorPack/Idle.png',
    framesMax: 6,
    scale: 2.5,
    offset: {x: 44,
        y: 81},
    sprites: {
        idle :{
            imageSrc: './Sprite/MedievalWarriorPack/Idle.png',
            framesMax: 6,
        },
    run :{
        imageSrc: './Sprite/MedievalWarriorPack/Run.png',
        framesMax: 8,
        image: new Image(),},
    }});
const Enemy = new Fighter({
    position:{x: 100,
        y: 100},
    velocity:{x: 0,
        y: 0},
    color:'blue',
    offset: {x: -50,
        y: 0},
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
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black'; // Efface le canvas avec un fond noir
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.drawbackground(); // Dessine le fond

    // Player
    // Réinitialisez la vitesse du joueur pour ne pas continuer à bouger si aucune touche n'est pressée
    Player.velocity.x = 0;

    // Gère la logique de déplacement vers la gauche
    if (keys.q.pressed && Player.lastKey === 'q') {
        Player.velocity.x = -3;
        if (!Player.isRunning) {
            Player.changeSprite('run');
            Player.isRunning = true; // Indique que le joueur court maintenant
        }
    }
    // Gère la logique de déplacement vers la droite
    else if (keys.d.pressed && Player.lastKey === 'd') {
        Player.velocity.x = 3;
        if (!Player.isRunning) {
            Player.changeSprite('run');
            Player.isRunning = true;
        }
    }
    // Si aucune touche de déplacement n'est pressée, l'animation revient à 'idle'
    else {
        if (Player.isRunning) {
            Player.changeSprite('idle');
            Player.isRunning = false; // Le joueur n'est plus en train de courir
        }
    }

    Player.update();

    // Enemy
    if(keys.ArrowLeft.pressed && Enemy.lastKey === 'ArrowLeft') {
        Enemy.velocity.x = -3;
    }
    else if(keys.ArrowRight.pressed && Enemy.lastKey === 'ArrowRight') {
        Enemy.velocity.x = 3;
    }

    // Player Attack
    if(rectangelCollision(Player, Enemy) && Player.isAttacking) {
        Player.isAttacking = false;
        Enemy.health -= 10;
        document.getElementById('EnemyHealth').style.width= Enemy.health + '%';
        console.log('Collision');
    }
    // Ennemy Attack
    if(rectangelCollision(Enemy, Player) && Enemy.isAttacking) {
        Enemy.isAttacking = false;
        Player.health -= 10;
        document.getElementById('PlayerHealth').style.width= Player.health + '%';
        console.log('Enemy Collision');
    }
    //End game based on health
    if(Enemy.health<=0 || Player.health<=0) {
        determineWinner(Player,Enemy,timerId)
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
        case ' ':
            Player.attack();
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
            Enemy.velocity.y = -20;
            break;
        case 'ArrowDown':
            Enemy.attack();
            break;
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