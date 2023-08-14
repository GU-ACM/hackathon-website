// add these items upon loading the page
document.addEventListener("DOMContentLoaded", () => {
  setCards();
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  next.addEventListener("click", () => {
    const currCard = document.querySelector(".card.view");
    const nextCard = currCard.nextElementSibling
      ? currCard.nextElementSibling
      : document.querySelector(".card-container").firstElementChild;
    currCard.classList.remove("view");
    currCard.style.visibility = "hidden";
    nextCard.classList.add("view");
    nextCard.style.visibility = "visible";
  });

  prev.addEventListener("click", () => {
    const currCard = document.querySelector(".card.view");
    const prevCard = currCard.previousElementSibling
      ? currCard.previousElementSibling
      : document.querySelector(".card-container").lastElementChild;
    currCard.classList.remove("view");
    currCard.style.visibility = "hidden";
    prevCard.classList.add("view");
    prevCard.style.visibility = "visible";
  });

  // let arrow keys change cards
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prev.click();
    else if (e.key === "ArrowRight") next.click();
    else return false;
  });
});

function setCards() {
  const data = document.querySelector(".card-container");
  const cards = data.querySelectorAll(".card");

  cards.forEach((card) => {
    if (card.classList.contains("landing")) {
      card.classList.add("view");
      card.style.visibility = "visible";
    } else {
      card.classList.remove("view");
      card.style.visibility = "hidden";
    }
  });
}