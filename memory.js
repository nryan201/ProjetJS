document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'fruit_de_la_passion', img: 'img/fruit_de_la_passion.png' },
        { name: 'fruit_de_la_passion', img: 'img/fruit_de_la_passion.png' },
        { name: 'igname', img: 'img/igname.png' },
        { name: 'igname', img: 'img/igname.png' },
        { name: 'coco', img: 'img/coco.png' },
        { name: 'coco', img: 'img/coco.png' },
        { name: 'fruit_a_pain', img: 'img/fruit_a_pain.png' },
        { name: 'fruit_a_pain', img: 'img/fruit_a_pain.png' },
        { name: 'goyave', img: 'img/goyave.png' },
        { name: 'goyave', img: 'img/goyave.png' },
        { name: 'groseille', img: 'img/groseille.png' },
        { name: 'groseille', img: 'img/groseille.png' },
        { name: 'mangue', img: 'img/mangue.png' },
        { name: 'mangue', img: 'img/mangue.png' },
        { name: 'carambole', img: 'img/carambole.png' },
        { name: 'carambole', img: 'img/carambole.png' },
    ];

    let gameBoard = document.getElementById('game-board');
    let chosenCards = [];
    let chosenCardsId = [];
    let cardsWon = [];

    function createBoard() {
        gameBoard.innerHTML = ''; // Clear the board
        cardsArray.sort(() => 0.5 - Math.random());
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

    function resetGame() {
        chosenCards = [];
        chosenCardsId = [];
        cardsWon = [];
        createBoard();
    }

    document.getElementById('reset-button').addEventListener('click', resetGame);

    createBoard();
});