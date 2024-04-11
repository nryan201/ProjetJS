class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 1,framesCurrent = 0, framesElapsed = 0, framesHold = 0,offset = {x: 0, y: 0}}) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.image.onload = () => {
            this.scaleWidth = canvas.width / this.image.width;
            this.scaleHeight = canvas.height / this.image.height;
        }
        this.framesMax = framesMax
        this.framesCurrent = framesCurrent
        this.framesElapsed = framesElapsed
        this.framesHold = framesHold
        this.offset = offset
    }

    drawbackground() {
        c.drawImage(this.image, this.position.x, this.position.y, this.image.width * this.scaleWidth, this.image.height * this.scaleHeight);
    }

    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x-this.offset.x,
            this.position.y-this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        );
    }


    animateFrames(){
        this.framesElapsed++
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }

    changeSprite(sprite) {
        if (this.image !== this.sprites[sprite].image) {
            this.image = this.sprites[sprite].image;
            this.framesMax = this.sprites[sprite].framesMax; // Met à jour framesMax
            this.framesCurrent = 0; // Réinitialise framesCurrent pour commencer l'animation du début
        }
    }
    update() {
        this.draw();
        this.animateFrames()
        }
}





class Fighter extends Sprite {
    constructor({position,velocity,color= 'white',
                    imageSrc, scale = 1,framesMax = 8,
                    offset = {x: 0, y: 0},
                    sprites}) {
        super({
            position,
            imageSrc,
            scale,
            offset,
            framesMax
        });
        this.velocity = velocity;
        this.height = 150;
        this.width = 50;
        this.lastKey ;
        this.attackBox = {
            position: {
                x: this.position.x ,
                y: this.position.y
            },
            offset,
            width: 100,
            height: 50
        }
        this.color =color;
        this.isAttacking = false;
        this.health = 100;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 15;
        this.framesMax = framesMax;
        this.sprites = sprites;
        this.isRunning = false;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    update(){
        this.draw();
        this.animateFrames();

        this.attackBox.position.x = this.position.x+ this.attackBox.offset.x ;
        this.attackBox.position.y = this.position.y ;


        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;

        if(this.position.y + this.height+this.velocity.y >= canvas.height-(canvas.height/4.7)) {
            this.velocity.y = 0
        } else {
            this.velocity.y+=gravity;
        }
    }
    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        },100)
    }
}