function rectangelCollision(rect1, rect2) {
    return(
        rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
        rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
        rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
        rect1.attackBox.position.y <= rect2.position.y + rect2.height)
}
let timerId
let timer=30
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