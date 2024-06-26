const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    actualRating.innerHTML = rating.innerHTML;
  });
});

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block";
  thanksContainer.classList.add("hidden");
});