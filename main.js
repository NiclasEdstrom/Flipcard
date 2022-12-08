const card = document.getElementsByClassName("card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped')[1];
});

function ChoseCard(cardNumber) 
{
  card[cardNumber].classList.toggle("is-flipped")
}