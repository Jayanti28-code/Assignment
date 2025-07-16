window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

const video = document.getElementById("bgVideo");
const btn = document.getElementById("videoControl");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    icon.className = "fas fa-pause";
  } else {
    video.pause();
    icon.className = "fas fa-play";
  }
});
