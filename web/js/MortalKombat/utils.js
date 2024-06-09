function rectangelCollision(rectangle1, rectangle2) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
        rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}
let timerId
let timer=60
const Timer = document.getElementById('Timer')
Timer.innerText= timer

function determineWinner(Player,Enemy,timerId) {
    clearTimeout(timerId)
    document.getElementById('Tie').style.display = 'flex'
    if (Player.health === Enemy.health) {
        document.getElementById('Tie').innerText = 'Tie'
    } else if (Player.health > Enemy.health) {
        document.getElementById('Tie').innerText = 'Player 1 Win'
    }else if (Enemy.health > Player.health) {
        document.getElementById('Tie').innerText = 'Player 2 Win'
    }
}


function decreaseTimer(){
    if (timer>0){
        timerId=setTimeout(decreaseTimer,1000)
        timer--
        Timer.innerText= timer
    }
    if(timer===0) {

        determineWinner(Player,Enemy,timerId)

    }
    return timer
}