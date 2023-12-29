const card = document.querySelector(".card");
const adviceId = document.getElementById("advice-id");
const adviceContainer = document.getElementById("advice");
const btn = document.getElementById("btn");

const url = "https://api.adviceslip.com/advice";

btn.addEventListener("click", fetchAdvice);

async function fetchAdvice() {
  adviceContainer.classList.add("fade");
  const response = await fetch(url);
  const data = await response.json();
  adviceId.textContent = data.slip.id;
  adviceContainer.textContent = data.slip.advice;
  adviceContainer.classList.remove("fade");
}
