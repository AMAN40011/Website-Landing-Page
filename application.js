
// Countdown Timer
const countDownDate = new Date("Oct 17, 2025 00:00:00").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// Subscribe Form Notification
const hero = document.querySelector(".hero");
const form = document.getElementById("subscribe-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const span = document.createElement("span");
  span.classList.add("noti");
  span.innerText = "Thank You For Subscribing!";
  hero.appendChild(span);

  form.reset();
});
