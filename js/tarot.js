let drawnCard = null;

function drawCard(type) {
  document.getElementById("cardTitle").innerText = "";
  document.getElementById("cardMessage").innerText = "";
  document.getElementById("cardImage").src = "assets/card-back.png";
  drawnCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
}

function revealCard() {
  if (drawnCard) {
    document.getElementById("cardImage").src = drawnCard.image;
    document.getElementById("cardTitle").innerText = drawnCard.name;
    document.getElementById("cardMessage").innerText = drawnCard.message;
  }
}
