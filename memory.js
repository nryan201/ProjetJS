document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'A', img: 'img\aloe verra .png' },
        { name: 'A', img: 'img\aloe verra .png' },
        { name: 'B', img: 'img\banane.png' },
        { name: 'B', img: 'img\banane.png' },
        { name: 'C', img: 'img\coco.png' },
        { name: 'C', img: 'img\coco.png' },
        { name: 'D', img: 'img\Fruit a pain.jpg' },
        { name: 'D', img: 'img\Fruit a pain.jpg' },
        { name: 'E', img: 'img\goyave.png' },
        { name: 'E', img: 'img\goyave.png' },
        { name: 'F', img: 'img\groseille.png' },
        { name: 'F', img: 'img\groseille.png' },
        { name: 'G', img: 'img\mangue.png' },
        { name: 'G', img: 'img\mangue.png' },
        { name: 'H', img: 'img\quenette.png' },
        { name: 'H', img: 'img\quenette.png' },
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game-board');
    let chosenCards = [];
    let chosenCardsId = [];
    let cardsWon = [];

    function createBoard() {
        cardsArray.forEach((item, index) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('data-id', index);

            const cardImage = document.createElement('img');
            cardImage.setAttribute('src', item.img);
            cardImage.setAttribute('alt', item.name);
            card.appendChild(cardImage);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const optionOneId = chosenCardsId[0];
        const optionTwoId = chosenCardsId[1];
        
        if (chosenCards[0] === chosenCards[1]) {
            cards[optionOneId].classList.add('match');
            cards[optionTwoId].classList.add('match');
            cardsWon.push(chosenCards);
        } else {
            cards[optionOneId].classList.remove('flip');
            cards[optionTwoId].classList.remove('flip');
        }

        chosenCards = [];
        chosenCardsId = [];

        if (cardsWon.length === cardsArray.length / 2) {
            alert('Félicitations! Vous avez gagné!');
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (!this.classList.contains('flip') && chosenCardsId.length < 2) {
            this.classList.add('flip');
            chosenCards.push(cardsArray[cardId].name);
            chosenCardsId.push(cardId);

            if (chosenCards.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    createBoard();
});
