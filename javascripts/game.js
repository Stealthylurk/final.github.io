var cards = [
    { image: "game_images/image1.png", isRevealed: false },
    { image: "game_images/image2.png", isRevealed: false },
    { image: "game_images/image3.png", isRevealed: false },
    { image: "game_images/image4.png", isRevealed: false },
    { image: "game_images/image5.png", isRevealed: false },
    { image: "game_images/image6.png", isRevealed: false },
    { image: "game_images/image7.png", isRevealed: false },
    { image: "game_images/image8.png", isRevealed: false },
    { image: "game_images/image9.png", isRevealed: false },
  ];

      function shuffleCards() {
    var winImages = ["game_images/image5.png", "game_images/image7.png", "game_images/image8.png"];

    // Генерируем две случайные позиции для выигрышных карт
    var winIndex1 = Math.floor(Math.random() * cards.length);
    var winIndex2 = Math.floor(Math.random() * cards.length);

    // Убеждаемся, что обе позиции разные
    while (winIndex1 === winIndex2) {
      winIndex2 = Math.floor(Math.random() * cards.length);
    }

    // Устанавливаем выигрышные карты на соответствующих позициях
    cards[winIndex1].image = winImages[Math.floor(Math.random() * winImages.length)];
    cards[winIndex2].image = winImages[Math.floor(Math.random() * winImages.length)];

    // Перемешиваем остальные карты
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }

  shuffleCards();

  var revealedCards = [];

  function revealCard(index) {
    if (!cards[index].isRevealed) {
      cards[index].isRevealed = true;
      document.getElementsByClassName("card")[index].innerHTML = `<img src="${cards[index].image}" alt="Card">`;

      revealedCards.push({ index: index, image: cards[index].image });

      if (revealedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

      function checkMatch() {
    var winImages = ["game_images/image5.png", "game_images/image7.png", "game_images/image8.png"];
    var uniqueImages = [...new Set(revealedCards.map(card => card.image))];

    if (revealedCards.length === 2 && uniqueImages.length === 1 && winImages.includes(uniqueImages[0])) {
        var audio = new Audio('audio/win_audio.wav'); 
        audio.play();

        alert("Congratulations! You have won a discount coupon!");
        // Сохранение сообщения в localStorage
        localStorage.setItem('gameMessage', 'You have won a discount coupon for our services or products!');
        window.location.replace("../index.html");
      }
       else {
        var audio = new Audio('audio/loose_audio.mp3'); 
        console.log("Unfortunately, you have lost. Please try again!");
        audio.play();

      alert("Oops! The cards don't match. Try again Tomorrow.");
      resetCards();
       }
     }

  function resetCards() {
    for (var i = 0; i < revealedCards.length; i++) {
      var index = revealedCards[i].index;
      cards[index].isRevealed = false;
      document.getElementsByClassName("card")[index].innerHTML = `<img src="game_images/card_back.png" alt="Card Back">`;
    }
    revealedCards = [];
  }